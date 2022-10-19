// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/AddToCalendarButtonComponent.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'AddToCalendarButtonComponent.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|assets|.github)/,
                use: 'babel-loader'
            }
        ]
    }
}