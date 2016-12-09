# loopback-redux-react-boilerplate

A boilerplate for a Redux-React application using LoopBack.
Inspired by:
- https://github.com/jpsierens/webpack-react-redux
- https://github.com/tngan/loopback-redux-react-boilerplate.git

### Technologies used

- React
- Redux
- Loopback
- Webpack
- Babel (ES2015 and React)
- ESLint (Airbnb codestyle)
- Helmet
- Redux DevTools
- Hot reloading
- Dotenv
- Material-UI

### Get Started
- **Clone this repository**
```bash
$ git clone https://github.com/GiovanniIncammicia/loopback-redux-react-boilerplate.git
```

- **Install dependencies specified in package.json**
```bash
$ npm install
```

- **Start the server (default port is set to 3000)**
```bash
$ npm start
```

### Scripts
- **npm run deploy**: Bundles the application into `/dist`.

- **npm run start_prod**: Starts production server, make sure you have already deployed the application.

- **npm run clean**: Removes the bundled files.

### Built-in example
A simple 'Hello World' Redux-React application is included in this boilerplate. You can find those files under `/client`.

Hot reloading and React-DevTools are only applied in development mode. In production mode, the code base is pre-compiled and placed under `/dist`.

### License

[MIT](LICENSE)

### Copyright

Copyright (C) 2016 Giovanni Incammicia, released under the MIT License.
