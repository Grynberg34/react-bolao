import React from 'react'
import { Field, reduxForm } from 'redux-form'

let NovaSenhaForm = props => {


  const { handleSubmit } = props


  return (
    <form className="redefinir-form" onSubmit={handleSubmit}>
      <div className="redefinir-form__section">
        <label className="redefinir-form__section__label" htmlFor="code">Código</label>
        <Field className="redefinir-form__section__input" name="code" component="input" type="text" />
      </div>
      <div className="redefinir-form__section">
        <label className="redefinir-form__section__label" htmlFor="password">Senha</label>
        <Field className="redefinir-form__section__input" name="password" component="input" type="password" />
      </div>
      <div className="redefinir-form__section">
        <label className="redefinir-form__section__label" htmlFor="repeatpassword">Repetir Senha</label>
        <Field className="redefinir-form__section__input" name="repeatpassword" component="input" type="password" />
      </div>
      <button className="redefinir-form__button" type="submit">Criar nova senha</button>
    </form>
  )
}

NovaSenhaForm = reduxForm({
  form: 'NovaSenhaForm'
})(NovaSenhaForm)

export default NovaSenhaForm
