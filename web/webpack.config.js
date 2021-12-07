module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: './app.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}