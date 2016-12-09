import React, { PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/main.css';

injectTapEventPlugin();

const App = ({ children }) =>
  <MuiThemeProvider>
    { children }
  </MuiThemeProvider>;

/* eslint-disable react/forbid-prop-types */
App.propTypes = {
  children: PropTypes.object,
};
/* eslint-enable react/forbid-prop-types */

export default App;
