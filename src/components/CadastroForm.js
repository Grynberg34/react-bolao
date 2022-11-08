import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CadastroForm = props => {


  const { handleSubmit } = props


  return (
    <form className="cadastro-form" onSubmit={handleSubmit}>
      <div className="cadastro-form__section">
        <label className="cadastro-form__section__label" htmlFor="nome">Nome</label>
        <Field className="cadastro-form__section__input" name="nome" component="input" type="text" />
      </div>
      <div className="cadastro-form__section">
        <label className="cadastro-form__section__label" htmlFor="email">Email</label>
        <Field className="cadastro-form__section__input" name="email" component="input" type="text" />
      </div>
      <div className="cadastro-form__section">
        <label className="cadastro-form__section__label" htmlFor="password">Senha</label>
        <Field className="cadastro-form__section__input" name="password" component="input" type="password" />
      </div>
      <div className="cadastro-form__section">
        <label className="cadastro-form__section__label" htmlFor="repeatpassword">Repetir senha</label>
        <Field className="cadastro-form__section__input" name="repeatpassword" component="input" type="password" />
      </div>
      <button className="cadastro-form__button" type="submit">Cadastrar</button>
    </form>
  )
}

CadastroForm = reduxForm({
  form: 'CadastroForm'
})(CadastroForm)

export default CadastroForm

