const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './javascript/src/index.js',
	output: {
		filename: 'app.min.js',
		path: path.resolve(__dirname, 'javascript')
	},
	optimization: {
		minimizer: [
			new uglify({
				parallel: true,
				uglifyOptions: {
					output: {
						comments: false
					}
				}
			})
		]
	}
};