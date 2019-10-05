import React from 'react';
import { reduxForm, Field } from 'redux-form'
import PropTypes from 'prop-types';
import { setPropsAsiInitial } from '../helplers/wrapper';

/* const isValid = value => (
  !value && "este campo es requerido"
) */

const isNumber = value => (
  isNaN(Number(value)) && "el campo debe ser un numero"
)

const validate = values => {
  const error = {}
  if(!values.name){ error.name = "el nombre es requerido" }
  if(!values.dni){ error.dni = "el DNI es requerido" }
  return error
}

const MyField = ({input, meta, type}) =>(
  <div>
    <input {...input} type={!type ? "text" : type}/>
    {meta.touched && meta.error  && <span>{meta.error}</span>}
  </div>
)

const CustomerEdit = ({name, dni, age, handleSubmit, submitting}) => {
  return (
    <div>
      <div className="customer-data">
        <h2>Editando datos del cliente</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <Field
              name="name"
              component={MyField}
              // validate={isValid}
              />
          </div>
          <div className="form-group">
            <label htmlFor="dni">DNI</label>
            <Field
              name="dni"
              component={MyField}
              // validate={isValid}
              />
          </div>
          <div className="form-group">
            <label htmlFor="age">Edad</label>
            <Field
              name="age"
              type="number"
              component={MyField}
              validate={isNumber}
              />
              
          </div>
          <button disabled={submitting} >Enviar</button>
        </form>
      </div>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
}

const editForm = reduxForm({
  form: 'customerEdit',
  validate
})(CustomerEdit)

export default setPropsAsiInitial(editForm);