const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const inDev = process.env.NODE_ENV === 'development'
const inProd = !inDev

module.exports = {
	entry: './src/index.tsx',
	devtool: inDev ? 'eval-source-map' : '',
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
				exclude: /\node_modules/,
			},
			{
				test: /\.css$/,
				loader: [
					MiniCssExtractPlugin.loader,
					{ loader: 'css-loader', options: { modules: true } },
				],
			},
		],
	},
}
