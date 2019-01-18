module.exports = {
    entry : './public/app/js/index.js',
    module:{
        rules: [
    
          {
            test: /\.js$/,
            exclude: /node_modules/
          },
    
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          }
    
        ]
      },
      resolve: {
        extensions: ['*', '.js', 'css'],
      },
      output: {
        path: __dirname +'/public/dist',
        filename : 'bundle.js'
    }
    
}