import emailjs from "emailjs-com";

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    // Owner email
    emailjs.sendForm(
      "service_sd4l8ro",
      "template_u09jnmh",
      e.target,
      "u6nClmqronwv3dwrG"
    );

    // Auto-reply
    emailjs.sendForm(
      "service_sd4l8ro",
      "template_iytak0s",
      e.target,
      "u6nClmqronwv3dwrG"
    );

    alert("✅ Message sent successfully!");
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Begin Your Musical Journey</h2>
            <p className="contact-description">
              Schedule a consultation with our admissions team to discuss your
              expectations and find the perfect program for you.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <a
                    href="https://maps.app.goo.gl/fm6mHmFvdsRjeevYA"
                    target="_blank"
                    className="map-link"
                  >
                    <p>
                      No. 10, Bajanai Kovil Street, Bharadhidasan Nagar, Avadi,
                      Chennai - 600071
                    </p>
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+919841313010">
                    <p>+91 9841313010</p>
                  </a>
                  <a href="tel:+919841157411">
                    <p>+91 9841157411</p>
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:sangeethamusicacademyofficial@gmail.com">
                    <p>sangeethamusicacademyofficial@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form className="contact-form" onSubmit={sendEmail}>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-input"
                  placeholder="firstname"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-input"
                  placeholder="lastname"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="+91 9876543210"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="program" className="form-label">
                Program of Interest
              </label>
              <select id="program" name="program" className="form-select">
                <option value="">Select a program</option>
                <option value="Piano/Keys">Piano Mastery</option>
                <option value="Vocals">Vocal Excellence</option>
                <option value="Guitar">Classical Guitar</option>
                <option value="drums">Drums</option>
                <option value="Music Theory">Music Theory</option>
                <option value="Other">Other Instruments</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                rows="4"
                placeholder="Tell us about your musical background and goals..."
              ></textarea>
            </div>

            <button type="submit" className="form-submit">
              Request Consultation
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
