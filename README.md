


## 依赖

webpack
webpack-cli

html-webpack-plugin
clean-webpack-plugin

Babel (JavaScript)
    babel-loader - Transpile files with Babel and webpack.
    @babel/core - Transpile ES2015+ to backwards compatible JavaScript
    @babel/preset-env - Smart defaults for Babel
    @babel/plugin-proposal-class-properties - An example of a custom Babel config (use properties directly on a class)

yarn add babel-loader @babel/core @babel/preset-env -D

yarn add sass-loader postcss-loader css-loader style-loader postcss-preset-env node-sass -D


webpack-dev-server



## 问题

```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value.
Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```