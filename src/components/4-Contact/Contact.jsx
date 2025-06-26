import React from 'react'
import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import done from "./../../../public/animation/done.json";
import contact from "./../../../public/animation/contact.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("manqvogd");

  return (<>
    <p className="headSection p1 hidden" id='contact'>Contact-<span> Me</span></p>
      <p className='subtitle p2 hiddens'>contact us for more information and get notified when i publish somthing new.</p>
    <section className='contact'>
      <div className="flex contact">
        <div className="flex hiddens">
        <form action="" onSubmit={handleSubmit}>
          <div className='flex'>
          <label htmlFor="email">Email Address :</label>
          <input autoComplete='off' type="email" id='email' name='email' required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className='flex' style={{marginTop:24}}>
          <label htmlFor="text">Your Message :</label>
          <textarea name="message" id="text" required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button className='submit'  type="submit" disabled={state.submitting}>
            {state.submitting ? 'submitting...' : 'submit'}
            </button>
        {state.succeeded && (<p className='flex success' style={{fontSize:'16px' , marginTop:'1.7rem' , justifyContent:'center' , textAlign:'center'}}><Lottie animationData={done} style={{height:55}} loop={false} />Your Message has been sent successfully 👌</p>)}
        </form>
      </div>
      <div className="animation">
      <Lottie className='contact-me-2 hiddens' animationData={contact} style={{height:400}} />
      </div>
      </div>
    </section>
    </>)
}
