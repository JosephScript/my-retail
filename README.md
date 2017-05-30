# my-retail

## Overview

This is a React implimentation of myRetail's product page. It is built using Webpack, transpiled with Babel for ES6 syntax, and uses PostCSS/CSSNext for future forward CSS capabilities. Also included are ployfills for promises and fetch, and PostCSS vendor prefixes, so that it is compatible with IE11.

## Installation 

``` bash
$ yarn
```

OR

```bash
$ npm install
```

## Dev Server

``` bash
$ yarn start
```

OR

```bash
$ npm start
```

Then open your browser and nagivate to `http://localhost:3000/`. There is a microserver just for development in `server.js` which is started, and will automatically bundle your code using Webpack for you. It includes a mock API on the `/api/` route and an in memory file server. The JS starts with `main.js` and imports everything from there. When you run the application it will auto inject the compiled JS and styles into the index.html for you using a template which you can change at `src/index.html`, giving you Hot Module Replacement - thus dev changes are automatically reflected on the page without reloading or losing your state. Linting also occurs automatically and results are displayed in the browser. 

## Tests

``` bash
$ yarn test
```

## Deployment

``` bash
$ yarn build
```

Files are output in the `/dist` folder. Simply serve these with your desired file server. Otherwise if you want to load this into an existing application, you can include the main.js file and a div with `id="my-retail"`. 
