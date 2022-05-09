import React from 'react'

const ContactForm = () => {
  return (
    <form>
        <div className='group'>
            <h3 className='page__contact__heading'>Contact Form</h3>
        </div>
        <div className='group'>
            <input type='text' name='name' value='' className='group__control' placeholder='Your Name'/>
        </div>
        <div className='group'>
            <input type='text' name='email' value='' className='group__control' placeholder='YourEmail address'/>
        </div>
        <div className='group'>
            <textarea cols='12' rows='8' className='group__textarea' placeholder='Enter your message...'/>
        </div>
        <div className='group'>
            <input type='submit' value='send Email &rarr;' className='btn_dark' />
        </div>
    </form>
  )
}

export default ContactForm