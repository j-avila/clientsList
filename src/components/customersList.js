import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './customerListItem';

const CustomersList = ({customers, urlPath}) => {
  return (
    <div>
      <div className="customers-list">
        {customers.map(c =>
            <CustomerListItem 
              key={c.dni} 
              dni={c.dni}
              customer={c.name} 
              editAction="editar"
              delAction="eliminar"
              urlPath={urlPath}
            />
        )}
      </div>
    </div>
  );
};

CustomersList.propTypes = {
  customers: PropTypes.array,
  urlPath: PropTypes.string,
};

export default CustomersList;