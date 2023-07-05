# react-boilerplate

Lightweight boilerplate for building web apps using React 17, Express and Node.js

## Getting Started

For setting up a project on your device, run the following commands

```python
# Clone the repository
git clone https://github.com/MeisterSchwarz/react17-boilerplate.git

# Change directory and install dependencies for API
cd react-boilerplate/API
npm install

# Change directory to UI and install dependencies
cd ../UI
npm install

# Run API and UI concurrently
npm run dev
```

## Features

### Concurrently

Using [Concurrently](https://www.npmjs.com/package/concurrently) makes it possible to run both webpack dev server and node server at the same time

### Hot Reloading

UI aswell as API are hot reloading during development. This can be achieved using [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) and [Nodemon](https://www.npmjs.com/package/nodemon)
