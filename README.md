Asset Management

https://webpack.js.org/guides/asset-management/

Global Assets

As long as you've installed any external dependencies;
And your configuration has the same loaders defined, you should be good to go.

However, let's say you're locked into your old ways or you have some assets that are shared between multiple components (views, templates, modules, etc.). It's still possible to store these assets in a base directory and even use aliasing to make them easier to import.

TODO:
aliasing: https://webpack.js.org/configuration/resolve/#resolve-alias
