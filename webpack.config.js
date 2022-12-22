module.exports = {
    mode: 'development',
    entry: {
        'server/main': './src/server/main.ts'
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/build`,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts', '.js',
        ],
    },
};