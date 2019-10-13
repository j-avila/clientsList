import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const CustomerListItem = ({customer, dni, editAction, delAction, urlPath}) => {
  return (
    <>
      <div className="customer-listItem">
        <div className="field">
          <Link to={`${urlPath}${dni}`} >{customer}</Link>
        </div>
        <div className="field">
          <Link to={`${urlPath}${dni}/edit`} >{editAction}</Link>
        </div>
        <div className="field">
          <Link to={`${urlPath}${dni}/delete`} >{delAction}</Link>
        </div>
      </div>
    </>
  );
};

CustomerListItem.propTypes = {
  customer: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  delAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;