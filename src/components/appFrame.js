import React from 'react';
// import PropTypes from 'prop-types';
import AppHeader from './appHeader';

const AppFrame = ({header, body}) => {
  return (
    <div>
      <div className="app-frame">
        <AppHeader title={header} />
        <div>{body}</div>
        <footer>
          aplcacion simple de ejemplo
        </footer>
      </div>
    </div>
  );
};

/* AppFrame.PropTypes = {
  
}; */

export default AppFrame;