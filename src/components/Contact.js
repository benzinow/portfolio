import React, { useState } from "react";
import Scroll2 from "./Scroll-2";
import ThankYou from "../images/thank-you.jpg";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = {
      Name: event.target.elements.name.value,
      Email: event.target.elements.email.value,
      Phone: event.target.elements.phone.value,
      Time: event.target.elements.time.value,
      Comments: event.target.elements.comments.value,
    };

    fetch("https://api.apispreadsheets.com/data/TUWzOOEVLn6oGC6J/", {
      method: "POST",
      headers: {
        accessKey: "bcbd9423bc7d331c383297d2f72fb5b4",
        secretKey: "4f8112f86ce2368d765c5bcbc77da14c",
      },
      body: JSON.stringify({ data: formData }),
    })
      .then((res) => {
        if (res.status === 201) {
          setFormSubmitted(true);
        } else {
          console.error("Form submission failed.");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });
  }

  return (
    <div className="contact">
      <div className="hh5">Let's Get Started</div>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label className="fixed-label-size">Name</label>
          <input name="name" />
        </div>
        <div className="form-item">
          <label className="fixed-label-size">E-mail</label>
          <input name="email" />
        </div>
        <div className="form-item">
          <label className="fixed-label-size">Phone</label>
          <input name="phone" />
        </div>

        <div className="form-item form-item-hopes">
          <label>Best Time to Get in Touch</label>
          <input name="time" />
        </div>

        <div className="form-item form-item-hopes">
          <label>Hopes and Dreams</label>
          <textarea name="comments" />
        </div>

        <div className="submit-button">
          <button className="submit-button-text" type="submit">
            Submit
          </button>
        </div>
      </form>

      {formSubmitted && (
        <div className="thank-you">
          <p className="hh2">
            I have received your message and will get in touch soon.
          </p>
          <p className="hh2">Thank you!</p>
          <img
            src={ThankYou}
            className="thank-you-image"
            alt="Benzi Holler with a big smile and a thumbs up in a long sleeve yellow shirt"
          />
        </div>
      )}

      <Scroll2 />
    </div>
  );
}

export default Contact;
