import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from './customerAction';

const CustomerData = ({id, name, dni, age, onBack, onDelete, isDeleteAllow}) => {
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
        {isDeleteAllow && <button className="delete" type="button" onClick={() => onDelete(id)}>Eliminar</button>}
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