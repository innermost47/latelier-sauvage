import "../style/contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <h2 className="sectionTitle greenTitle text-center">CONTACT</h2>
          <div className="contactForm">
            <p>
              Je vous invite à me contacter si vous souhaitez réserver pour une
              animation, en créer une en collaboration ou pour davantage
              d'informations. Je vous répondrai dans les plus brefs délais.
            </p>
            <form action="">
              <div className="form-container mt-3">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="form-control"
                  name="name"
                />
              </div>
              <div className="form-container mt-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="form-control"
                  name="email"
                />
              </div>
              <div className="form-container mt-3">
                <textarea
                  name="message"
                  placeholder="Votre message"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-green mt-3 text-light  ">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
