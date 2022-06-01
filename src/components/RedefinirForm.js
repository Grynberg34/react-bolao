import React from 'react'
import { Field, reduxForm } from 'redux-form'

let RedefinirForm = props => {


  const { handleSubmit } = props


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" required min="1" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

RedefinirForm = reduxForm({
  form: 'RedefinirForm'
})(RedefinirForm)

export default RedefinirForm
