import React from 'react';
// import PropTypes from 'prop-types';
import AppHeader from './appHeader';

const AppFrame = ({header, body}) => {
  return (
    <div>
      <div className="app-frame">
        <AppHeader title={header} />
        <div>{body}</div>
        <div>aplcacion simple de ejemplo</div>
      </div>
    </div>
  );
};

/* AppFrame.PropTypes = {
  
}; */

export default AppFrame;