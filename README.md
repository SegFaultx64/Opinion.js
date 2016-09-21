# Opinion.js

## An opinionated starter kit for publishing React components.

Opinion.js uses Webpack, CSS Modules, and Babel to compile React components for publication to NPM.

## Getting started

```bash
npm install
npm start
```

Then just navigate to `http://localhost:8080` and start editing `/src/index.js`

## Packaging

```bash
npm build
```

Your library bundle will then be availible in `/lib/bundle.js`

## Folder layout

```
.
├── /lib/                       # The folder of compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the component (EDIT THIS)
│   ├── /index.js               # The entry file for the component
│   └── /example-props.js       # The default component props to show in dev mode
├── /config/                    # Build automation scripts and utilities (You probably shouldn't need to touch this)
│   ├── /dev_server/            # Things relating to serving the development version
│   ├── /build.js               # Builds the project from source to output (lib) folder
│   ├── /entry.js               # Runs the project in dev mode
│   └── /webpack.config.js      # Configurations for bundle in dev
│   └── /webpack.prod.config.js # Configurations for bundle in production
└── package.json                # The list of 3rd party libraries and utilities
```
