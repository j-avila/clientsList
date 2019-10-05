import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({name, dni, age}) => {
  return (
    <div>
      <div className="customer-data">
        <h2>datos del cliente</h2>
        <div><strong>Nombre</strong> {name}</div>
        <div><strong>DNI</strong> {dni}</div>
        <div><strong>Edad</strong> {age}</div>
      </div>
    </div>
  );
};

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default CustomerData;