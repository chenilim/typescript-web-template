const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const makeCommonConfig = require('./webpack.common')

const commonConfig = makeCommonConfig(true)

const config = merge(commonConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	optimization: {
		minimize: false,
		minimizer: [new TerserPlugin({})]
	}
})

const outpath = path.resolve(__dirname, 'pack')

module.exports = [
	merge(config, {
		output: {
			filename: '[name].js',
			path: outpath,
		}
	}),
]
