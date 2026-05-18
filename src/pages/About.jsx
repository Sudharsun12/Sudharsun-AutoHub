function About() {
  return (
    <section className="page">

      <div className="about-container">

        <div className="about-left">

          <p className="section-tag">
            WHO WE ARE
          </p>

          <h1>
            Redefining The Used Car Experience
          </h1>

          <p>
            Sudharsun AutoHub is a modern automobile
            platform built for people who want premium
            quality vehicles without overpaying.
          </p>

          <p>
            Every car undergoes detailed inspection,
            document verification, servicing checks,
            and performance evaluation before listing.
          </p>

          <div className="about-features">

            <div className="about-box">
              <h2>100%</h2>
              <p>Verified Cars</p>
            </div>

            <div className="about-box">
              <h2>24/7</h2>
              <p>Customer Support</p>
            </div>

            <div className="about-box">
              <h2>7 Days</h2>
              <p>Easy Return Policy</p>
            </div>

          </div>

        </div>

        <div className="about-right">

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="car"
          />

        </div>

      </div>

    </section>
  );
}

export default About;