import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from './customerAction';

const CustomerData = ({name, dni, age, onBack}) => {
  return (
    <div>
      <div className="customer-data">
        <h2>datos del cliente</h2>
        <div><strong>Nombre</strong> {name}</div>
        <div><strong>DNI</strong> {dni}</div>
        <div><strong>Edad</strong> {age}</div>
      </div>
      <CustomerActions>
        <button type="button" onClick={onBack}>Atras</button>
      </CustomerActions>
    </div>
  );
};

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number,
};

export default CustomerData;