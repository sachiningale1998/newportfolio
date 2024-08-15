import React from "react";
import "../styles/contact.css";

import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ec59sqd",
        "template_wmogvb4",
        e.target,
        "cCrlE6cQpInze7hXn"
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
  };

  const setAlert = () => {
    alert(
      "Hey, I'm glad that you tried contacting me, I'll get in touch with you soon."
    );
  };

  return (
    <div id="footer">
      <div className="getintouch">
        <h1>Get In Touch</h1>
      </div>
      <div className="opportunities">
        <h5>
          I'm actively looking for any new opportunities, in full-stack web
          development.
        </h5>
      </div>

      <div className="logos">
        <div className="contact-links">
          <a
            href="tel:+91-9975161692"
            aria-label="phone"
            rel="noreferrer"
            target="_blank"
          >
            <i id="logo1" class="fas fa-phone-alt"></i>
          </a>
        </div>
        <div className="contact-links">
          <a
            href="mailto:sachiningale8987@gmail.com"
            aria-label="email"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact-links">
          <a
            href="https://twitter.com/Sachin_Ingale_"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/sachin98i/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact-links">
          <a
            href="https://github.com/sachiningale1998"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      <div id="myself">
        <h6>
          Sachin Ingale
          <br />
          Kukana, Tal : Newasa, Dist : Ahmednagar, Maharashtra, 414604.
          <br />
          +91 9975161692
          <br />
          sachiningale8987@gmail.com
        </h6>
        <br />
        <br />
      </div>
      <div id="colaborate">
        <h6>
          Drop a suggestion, feedback, opportunities or we can colaborate on a
          project. Please mention your contact details if you are expecting a
          reply.
        </h6>
      </div>
      <br />

      <div className="sendMail">
        <form onSubmit={sendEmail} className="form-sas">
          <div>
            <input
              name="name"
              placeholder="Enter your email address"
              type="name"
              className="Contact_formsubi__xHwJa form-control"
            />
          </div>
          <br />
          <div>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              className="Contact_formmsg__39M9c form-control"
            ></textarea>
          </div>
          <br />

          <button
            onClick={setAlert}
            type="submit"
            className="Contact_buttonComponent__JAxTI btn btn-primary"
          >
            <span>Submit</span>
          </button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Contact;
