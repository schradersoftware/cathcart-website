import React from 'react'
import {Box, useMediaQuery} from '@material-ui/core'
import { useTheme } from '@material-ui/styles';
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'
import emailjs from 'emailjs-com';

import './styles.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Your name', placeholder: 'John Doe' },
  {
    className: 'form-control',
    name: 'phone',
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+01 234 567 8900',
  },
  {
    className: 'form-control',
    name: 'email',
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
    className: 'form-control',
    name: 'body',
    id: 'message',
    type: 'textarea',
    label: 'Your message',
    placeholder: 'How can we help you? Or you us?',
  },
]

const Form = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1nwpeyk',
        'template_g9g42q9',
        e.target,
        'user_P07Tx1xVAjmyvUS92nW0A'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm')); 
  return (
    <form onSubmit={sendEmail} className="form">
      <Box style={matchesSM ? {width: '92vw'} : {}}></Box>
      {formInputs.map(input => (
        <label key={input.label} id={input.id} className="form-label">
          {input.type === 'textarea' ? (
            <textarea className="formField form-textarea" placeholder={input.placeholder} />
          ) : (
            <input
              className="formField form-input"
              type={input.type}
              placeholder={input.placeholder}
            />
          )}
        </label>
      ))}
      <div className="buttonOuter text-end">
        <button className="form-submit" type="submit">Submit</button>
      </div>
      {/* <div className='row pt-5 mx-auto'>
              <div className='col-8 form-group mx-auto'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='name'
                />
              </div>
              <div className='col-8 form-group pt-2 mx-auto'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email Address'
                  name='email'
                />
              </div>
              <div className='col-8 form-group pt-2 mx-auto'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Subject'
                  name='subject'
                />
              </div>
              <div className='col-8 form-group pt-2 mx-auto'>
                <textarea
                  className='form-control'
                  id=''
                  cols='30'
                  rows='8'
                  placeholder='Your message'
                  name='message'
                ></textarea>
              </div>
              <div className='col-8 pt-3 mx-auto'>
                <input
                  type='submit'
                  className='btn btn-info'
                  value='Send Message'
                ></input>
              </div>
            </div> */}
      {/* <Icon className="form-submit" icon={sendCircle} /> */}
    </form>
  )
} 

export default Form
