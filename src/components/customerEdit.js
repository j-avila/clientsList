import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form'
import { setPropsAsInitial } from '../helplers/wrapper';
import CustomerActions from './customerAction'
import { Prompt } from 'react-router-dom';
import { accessControl } from '../helplers/accessControl';
import { CUSTOMER_EDIT } from '../constants';


const isValid = value => (
  !value && "este campo es requerido"
)

const isNumber = value => (
  isNaN(Number(value)) && "el campo debe ser un numero"
)

const validate = values => {
  const error = {}
  if (!values.name) { error.name = "el nombre es requerido" }
  if (!values.dni) { error.dni = "el DNI es requerido" }
  return error
}

const toNumber = value => value && Number(value)
// const toString = value => value && toString(value)
/* const onlyGrow = (value, previousValue, values) =>
  value && (!previousValue  ? value: (value > previousValue ? value : previousValue)) */



class CustomerEdit extends Component {
 
  componentDidMount() {
    if(this.txt){
      this.txt.focus()
    }
  }

  MyField = ({ input, meta, type, withFocus }) => (
    <div>
      <input {...input}
        type={!type ? "text" : type}
        ref={withFocus && (txt => this.txt = txt)}
      />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  )
  
  render(){
    const { name, dni, age, handleSubmit, onBack, submitting, pristine, submitSucceeded } = this.props

    return (
      <div>
        <div className="customer-data">
          <h2>Editando datos del cliente</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <Field
                withFocus
                name="name"
                component={this.MyField}
                validate={isValid}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dni">DNI</label>
              <Field
                name="dni"
                component={this.MyField}
                validate={isValid}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Edad</label>
              <Field
                name="age"
                type="number"
                component={this.MyField}
                validate={isNumber}
                parse={toNumber}
                // normalize={onlyGrow}
              />
  
            </div>
            <CustomerActions>
              <button type="submit" disabled={pristine || submitting}>
                {submitting && <i className="fas fa-compact-disc fa-spin"></i>}
                Enviar
              </button>
              <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
            </CustomerActions>
          </form>
          <Prompt
              when={!pristine && !submitSucceeded}
              message="perderás todos los datos si sales"
          />
        </div>
      </div>
    )
  }
}

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
}

const CustomerEditForm = reduxForm({
  form: 'customerEdit',
  validate
})(CustomerEdit)

export default accessControl([CUSTOMER_EDIT])(setPropsAsInitial(CustomerEditForm)); 
