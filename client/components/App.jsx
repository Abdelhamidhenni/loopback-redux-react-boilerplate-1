import React, { PropTypes } from 'react';
import '../styles/main.css';

const App = ({ children }) =>
  <div>
    { children }
  </div>;

/* eslint-disable react/forbid-prop-types */
App.propTypes = {
  children: PropTypes.object,
};
/* eslint-enable react/forbid-prop-types */

export default App;
