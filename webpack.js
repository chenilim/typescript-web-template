const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const JavaScriptObfuscator = require('webpack-obfuscator')
const TerserPlugin = require('terser-webpack-plugin')
const makeCommonConfig = require('./webpack.common')

const commonConfig = makeCommonConfig(true)

const config = merge(commonConfig, {
	mode: 'production',
	plugins: [
		new JavaScriptObfuscator({
			compact: true,
			controlFlowFlattening: true,
			controlFlowFlatteningThreshold: 0.75,
			deadCodeInjection: false,
			debugProtection: false,
			debugProtectionInterval: 0,
			disableConsoleOutput: true,
			identifierNamesGenerator: 'hexadecimal',
			renameGlobals: false,
			rotateStringArray: true,
			selfDefending: false,
			stringArray: true,
			stringArrayEncoding: ['base64'],
			stringArrayThreshold: 0.75,
			transformObjectKeys: true,
			unicodeEscapeSequence: false,
			log: true,
			seed: 1
		})
	],
	optimization: {
		minimize: true,
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
