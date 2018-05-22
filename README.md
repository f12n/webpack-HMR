Webpack HMR

https://webpack.js.org/guides/hot-module-replacement/

HMR is not intended for use in production, meaning it should only be used in development. See the building for production guide for more information(TODO):
https://webpack.js.org/guides/production


Enabling HMR
-All we need to do is update our webpack-dev-server configuration, and use webpack's built in HMR plugin. We'll also remove the entry point for print.js as it will now be consumed by the index.js module.

-(TODO)If you took the route of using webpack-dev-middleware instead of webpack-dev-server, please use the webpack-hot-middleware package to enable HMR on your custom server or application:
https://github.com/webpack-contrib/webpack-hot-middleware



