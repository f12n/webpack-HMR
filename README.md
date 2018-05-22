Webpack HMR

https://webpack.js.org/guides/hot-module-replacement/

HMR is not intended for use in production, meaning it should only be used in development. See the building for production guide for more information(TODO):
https://webpack.js.org/guides/production


Enabling HMR
-All we need to do is update our webpack-dev-server configuration, and use webpack's built in HMR plugin. We'll also remove the entry point for print.js as it will now be consumed by the index.js module.

-(TODO)If you took the route of using webpack-dev-middleware instead of webpack-dev-server, please use the webpack-hot-middleware package to enable HMR on your custom server or application:
https://github.com/webpack-contrib/webpack-hot-middleware
see branch: hmr-hotMiddleware
here just output to browser console, TODO: browser auto refresh.


Other Code and Frameworks
There are many other loaders and examples out in the community to make HMR interact smoothly with a variety of frameworks and libraries...

React Hot Loader: Tweak react components in real time.
https://github.com/gaearon/react-hot-loader

Vue Loader: This loader supports HMR for vue components out of the box.
https://github.com/vuejs/vue-loader

Elm Hot Loader: Supports HMR for the Elm programming language.
https://github.com/fluxxu/elm-hot-loader

Redux HMR: No loader or plugin necessary! A simple change to your main store file is all that's required.
https://survivejs.com/webpack/appendices/hmr-with-react/#configuring-hmr-with-redux

Angular HMR: No loader necessary! A simple change to your main NgModule file is all that's required to have full control over the HMR APIs.
https://github.com/gdi2290/angular-hmr


Further Reading
Concepts - Hot Module Replacement：
https://webpack.js.org/concepts/hot-module-replacement

API - Hot Module Replacement
https://webpack.js.org/api/hot-module-replacement
