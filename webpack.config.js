module.exports = {
    entry: "./src/app.jsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.jsx?$/, 
                loader: "babel-loader", 
                exclude: /node_modules/, 
                query: { 
                    presets: ['es2015', 'react'] 
                }
            }
        ]
    },
};