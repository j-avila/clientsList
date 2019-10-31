import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'
import CustomerActions from '../components/customerAction'

const validate = values => {
  const error = {}
  if (!values.username) { error.username = "el nombre de usuario es requerido" }
  if (!values.password) { error.password = "el password es requerido" }
  return error
}


class LoginForm extends Component {
  
  myField = ({ input, meta, type, withFocus }) => (
    <div>
      <input {...input}
        type={!type ? "text" : type}
        ref={withFocus && (txt => this.txt = txt)}
      />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  )

  render(){
    const {handleSubmit} = this.props
    return(
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Usuario</label>
          <Field
            withFocus
            name="username"
            component={this.myField}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <Field
            type="password"
            withFocus
            name="password"
            component={this.myField}
          />
        </div>
        <CustomerActions>
          <button type="submit">Entrar</button>
        </CustomerActions>
      </form>
    )
  }
}

const UserLogin = reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm)

export default UserLogin