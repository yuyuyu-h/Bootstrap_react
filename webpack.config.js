module.exports = {
	entry: './modules/main.jsx',
	output: {
		filename: './dist/ickt.js'
	},
	module: {
		// 加载机
		rules: [
			// jsx	
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			// less
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader'
			}
		]
	}
}