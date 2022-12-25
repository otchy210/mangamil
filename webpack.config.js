const common = {
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
}

const app = {
    ...common,
    target: 'electron-main',
    entry: {
        'app/main': './src/app/main.ts',
    },
}

const server = {
    ...common,
    target: 'node',
    entry: {
        'server/main': './src/server/main.ts',
    },
}

module.exports = [app, server];