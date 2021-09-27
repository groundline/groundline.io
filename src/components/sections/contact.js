import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  margin: 0 auto 100px;
  text-align: left;
  color: var(--dark-navy);

  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 50px;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--dark-navy);
    font-size: var(--fz-sm);    
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
    color: var(--dark-slate);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }

  .contact-form {
    input, textarea {
      width: 100%;
      padding: 1rem;
      outline: 0;
      margin-bottom: 0.5rem;
      font-size: 1rem;
      font-family: inherit;
      display: block;
      border-width: 1px;
      border-radius: 0.25rem;
      --border-opacity: 1;
      box-sizing: border-box;
      -webkit-appearance: none;
      touch-action: manipulation;
      border: 1px solid #cbd5e0;
    }

    button {
      background-color: #1890ff;
      -webkit-appearance: button;
      --text-opacity: 1;
      color: rgba(255,255,255,var(--text-opacity));
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: .5rem;
      padding-bottom: .5rem;
      font-size: 1rem;
      border-width: 1px;
      border-radius: .25rem;
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <div style={{backgroundColor: '#FFFFFF'}}>
      <StyledContactSection id="contact" ref={revealContainer}>

        <div>
          <h4 className="numbered-heading overline">Contact Us</h4>
          <h2 className="title">Get In Touch</h2>

          <p>
          We are happy to hear from you. To know more about our work and how we can help you, 
          send your message using the form and we will get in touch with you as soon as possible.
          </p>
        </div>

        <form action="/#contact" name="contact" method="POST" className="contact-form" data-netlify-honeypot="bot-field" data-netlify="true" id="contact-form">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input 
              type="text" 
              name="name" 
              id="contact-form-name" 
              aria-labelledby="contact-form-name-label" 
              placeholder="Name" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              id="contact-form-email" 
              aria-labelledby="contact-form-email-label" 
            />
            <textarea
                name="message"
                id="contact-form-message"
                aria-labelledby="contact-form-message-label"
                rows="4"
                placeholder="Message"
            />
            <button 
              type="submit" 
              style={{backgroundColor: "#1890ff"}}
              > Send
            </button>
        </form>

      </StyledContactSection>
    </div>
  );
};

export default Contact;
