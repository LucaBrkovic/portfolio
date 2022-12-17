import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from "../assets/img/contact-img.svg"
import TrackVisibility from 'react-on-screen';
import "animate.css"
export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
              console.log("Dobro")
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return( 
        <section className='contact' id='connect'>
            <Container>
                <div className="contact-div_parent">
                    <div  className="contact-div_child_img">
                    <img src={contactImg}></img>
                    </div>
                    <div className='contact-div_child_contact'>
                    <TrackVisibility>
             {({isVisible}) =>
             <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <h2>Get in Touch</h2>
                    </div>}
                    </TrackVisibility>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='contact-grid'>
                        <div  className="contact-type_one">
                        <input type="text" name="user_name" placeholder='Name'  />
                        </div>
                        <div  className="contact-type_one">
                        <input type="email" name="user_email" placeholder='Email' />
                        </div>
                        <div className="contact-type_two">
                        <textarea name="message"  placeholder='Message' />
                        <TrackVisibility>
             {({isVisible}) =>
             <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <div className='contact-btn__container'>
                            <button type='submit'>Send Message</button>    
                            </div>
                            </div>}
                            </TrackVisibility>
                        </div> 
                        </div>
                    </form>
                    </div>
                </div>
            </Container>
        </section>
    )
}   

//  <div>
    
//  <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       
//       <label>Email</label>
//       
//       <label>Message</label>
//       <textarea name="message" />
//     
//     </form>
//     </div>