const webpack = require('webpack')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const preprocessor = require('webpack-preprocessor-loader')

function makeCommonConfig(isProEdition = false) {
	const preprocessorOptions = {
		debug: process.env.NODE_ENV !== 'production',
		params: {
			__PRO__: isProEdition,
			ENV: process.env.NODE_ENV,
		},
		verbose: false,
	}

	const commonConfig = {
		mode: 'development',
		node: {
			__dirname: false,
			__filename: false
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: [/node_modules/],
				},
				{
					test: /\.html$/,
					loader: 'file-loader',
				},
				{
					test: /\.(tsx?|js|html)$/,
					use: [
						{
							loader: 'webpack-preprocessor-loader',
							options: preprocessorOptions,
						},
					],
					exclude: [/node_modules/],
				}
			]
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js']
		},
		plugins: [
			new webpack.IgnorePlugin({ resourceRegExp: /\.min\.js$/ }),
			new CopyPlugin({
				patterns: [
					{
						from: path.resolve(__dirname, 'src/*.html'),
						to: '[name][ext]',
						transform: function (content) {
							const context = {
								query: preprocessorOptions
							}
							return preprocessor.call(context, content.toString())
						}
					},
					{ from: path.resolve(__dirname, 'src/static'), to: 'static' },
				],
			}),
		],
		target: 'web',
		entry: {
			main: './src/main.ts',
		},
	}

	return commonConfig
}

module.exports = makeCommonConfig
