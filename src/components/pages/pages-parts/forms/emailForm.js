import React, {useState} from 'react'

const EmailForm = () => {

  const initialValues = {
      name: '',
      email: '',
      message: ''
  }

  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleSubmit =(e) =>{
    e.preventDefault()
   
    setFormErrors(validate(formValues))
    setIsSubmit(true)    
    
  }

  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }

  const validate = (values) =>{
    
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.name){
      errors.name = 'Name is required'
    }
    if(!values.message){
      errors.message = 'Message is required'
    }
    if(!values.email){
      errors.email = 'Email is required'
    }
    else if(!regex.test(values.email)){
      errors.email = 'Valid email is required'
    }

    return errors
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='modal_heading'>
        <h3>Send us an message</h3>
      </div>
      {Object.keys(formErrors).length === 0 && isSubmit ? (<div>Message was sent!</div>) : (<pre>{JSON.stringify(formErrors, undefined, 2)}</pre>)}
      
      
      <div className='group'>
      <label>Name:</label>
        <input type='text' className='group__control' name='name' value={formValues.name}  onChange={handleChange}/>
        <p>{formErrors.name}</p>
      </div>
      <div className='group'>
      <label>Email:</label>
        <input type='text' className='group__control' name='email' value={formValues.email} onChange={handleChange} />
        <p>{formErrors.email}</p>
      </div>
      <div className='group'>
      <label>Message:</label>
        <input type='text' className='group__textarea' name='message' value={formValues.message} onChange={handleChange} />
        <p>{formErrors.message}</p>
      </div>
      <div className='group modal__row'>
      <input type='submit'  className='btn_dark' value='Send'  onClick={handleSubmit}/>
      </div>
      </form>
  )
}

export default EmailForm