import React from 'react'
import {Box, useMediaQuery} from '@material-ui/core'
import { useTheme } from '@material-ui/styles';
import { Icon } from '@iconify/react'
import sendCircle from '@iconify/icons-mdi/send-circle'
import emailjs from 'emailjs-com';

import './form.css'

const formInputs = [
  { id: 'name', type: 'text', label: 'Your name', placeholder: 'John Doe' },
  {
    id: 'tel',
    type: 'tel',
    label: 'Phone number',
    placeholder: '+01 234 567 8900',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email address',
    placeholder: 'you@example.com',
  },
  {
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
          {/* {input.label} */}
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
      {/* <Icon className="form-submit" icon={sendCircle} /> */}
    </form>
  )
} 

export default Form
