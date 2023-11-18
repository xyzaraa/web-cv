const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-text col-md-4">
            <h3>Address</h3>
            <p>Batu City, East Java <br />Jl. Dewi Sartika No. 12E <br />Postal Code: 65315</p>
          </div>
          <div className="footer-text col-md-4">
            <h3>Contact Me</h3>
            <p>(+62)85238032544 <br />kiarazzahraaa@gmail.com <br /><a className="linkedin-footer" href="https://www.linkedin.com/in/kiara-azzahra-0410b3232/">LinkedIn</a></p>
          </div>
          <div className="footer-text col-md-4">
            <h3>Random Quotes</h3>
            <p id="quotes">It's better to choose to be silent than to have to mumble about people who don't think about other people's feelings at all.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
