import { useState } from "react";

function Contact() {

  const [name,setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank You For Contacting Sudharsun AutoHub");
  };

  return (
    <section className="page">

      <div className="contact-container">

        <div className="contact-left">

          <p className="section-tag">
            CONTACT INFORMATION
          </p>

          <h1>
            Get In Touch With Us
          </h1>

          <p>
            Looking for premium second-hand cars with
            verified quality and trusted support?
            Sudharsun AutoHub is here to help you
            find your perfect vehicle.
          </p>

          <div className="contact-info">

            <p>
              👨‍💼 Manager :
              <strong> Sudharsun A</strong>
            </p>

            <p>
              📍 Location :
              <strong> Trichy, Tamil Nadu</strong>
            </p>

            <p>
              📞 Phone :
              <strong> +91 9080454067</strong>
            </p>

            <p>
              ✉️ Email :
              <strong> sudharsunautohub@gmail.com</strong>
            </p>

            <p>
              🕒 Working Hours :
              <strong> 9 AM - 9 PM</strong>
            </p>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="contact-form"
        >

          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Your Email"
          />

          <input
            type="text"
            placeholder="Enter Mobile Number"
          />

          <textarea
            placeholder="Enter Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;