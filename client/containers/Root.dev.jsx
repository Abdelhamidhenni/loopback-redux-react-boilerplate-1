import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import DevTools from './DevTools';
import routes from '../routes';

const Root = (props) => {
  const { store, history } = props;
  return (
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes} />
        <DevTools />
      </div>
    </Provider>
  );
};

/* eslint-disable react/forbid-prop-types */
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
/* eslint-enable react/forbid-prop-types */

export default Root;
