import React from 'react';
import PropTypes from 'prop-types';

const CutomerEdit = ({name, dni, age}) => {
  return (
    <div>
      <h2>Edicion de cliente</h2>
      <h3>{name} / {dni} / {age} </h3>
    </div>
  );
};

CutomerEdit.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
export default CutomerEdit;