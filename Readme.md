# Decider

An application/tutorial/workshop based on rock, paper, scissors.

Branches:

* `main`is at the start of the workshop.
    * Run `make install` then `make test` and finally `make run`.
    * Alternatively, reference the setup instructions below to recreate this from scratch.
* `solution`contains a worked solution to the workshop exercises

# Setup

The `main` branch is already setup. Skip this section unless you'd like to start yourself from scratch.

## The `rps` module

```
mkdir rps
cd rps
npm init -y # accept defaults
npm install --save-dev @babel/core @babel/preset-env babel-jest jest
```

`babel.config.json`

```json
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

Add this to`package.json`

```json
{
  "scripts": {
    "test": "node_modules/.bin/jest"
  }
}
```

Test this with

```
npm test # Should see one passing test
```

## The `web` module

```
mkdir web
cd web
npm init -y # accept defaults
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader babel-jest jest webpack webpack-cli
npm install --save ../rps react react-dom react-app-polyfill
```

Add this to`package.json`
```json
{
  "scripts": {
    "start": "NODE_ENV=development webpack --mode development --watch",
    "test": "node_modules/.bin/jest"
  }
}
```

See the contents of these files:

* The [babel config](web/babel.config.json)
* The [webpack config](web/webpack.config.js)
* The [jest config](web/jest.config.js)
* The [index.html](web/index.html)
* The [index page](web/src/index.jsx)

Next you can run and open the file in the browser:
```
npm start
open index.html
```

# Next Steps

There is more information about [writing the first wiring tests](WritingTests.md) for each module.
