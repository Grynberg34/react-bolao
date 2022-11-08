import React from 'react'
import { Field, reduxForm } from 'redux-form'

let RedefinirForm = props => {


  const { handleSubmit } = props


  return (
    <form className="redefinir-form" onSubmit={handleSubmit}>
      <div className="redefinir-form__section">
        <label className="redefinir-form__section__label" htmlFor="email">Email</label>
        <Field className="redefinir-form__section__input" name="email" component="input" type="text" required min="1" />
      </div>
      <button className="redefinir-form__button" type="submit">Enviar código</button>
    </form>
  )
}

RedefinirForm = reduxForm({
  form: 'RedefinirForm'
})(RedefinirForm)

export default RedefinirForm
