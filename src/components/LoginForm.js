import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {


  const { handleSubmit } = props


  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__section">
        <label className="login-form__section__label" htmlFor="email">Email</label>
        <Field className="login-form__section__input" name="email" component="input" type="text" />
      </div>
      <div className="login-form__section">
        <label className="login-form__section__label" htmlFor="password">Senha</label>
        <Field className="login-form__section__input" name="password" component="input" type="password" />
      </div>
      <button className="login-form__button" type="submit">Login</button>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'LoginForm'
})(LoginForm)

export default LoginForm
