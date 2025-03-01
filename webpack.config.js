const path = require('path');

module.exports = {
  entry: './src/app/page.tsx',  // Adjust to your TypeScript entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // Handles TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
