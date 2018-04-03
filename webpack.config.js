const path = require('path');

const config = {
    entry: {
        main: path.resolve(__dirname, 'src', 'main.ts'),
        app: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
            {
                test: /\.scss$/,
                loader: 'css-loader!sass-loader',
            },
        ],
    },
    resolve: {
        modules: ['.', path.resolve(__dirname, 'node_modules')],
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
    },
    target: 'electron-main',
    node: {
        __dirname: false,
    },
};

module.exports = config;
