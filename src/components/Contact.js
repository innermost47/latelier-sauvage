import "../style/contact.css";
import { url } from "../js/Constantes";
import axios from "axios";
import { useForm } from "react-hook-form";
import React from "react";
import { recaptchaKey } from "../js/Constantes";

const Contact = () => {
  const recaptchaRef = React.useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const recaptchaValue = recaptchaRef.current.getValue();
    data.recaptcha = recaptchaValue;
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("recaptcha", data.recaptcha);
    axios.post(url + "email", formData).then((response) => {
      document.getElementById("contactForm").reset();
      window.grecaptcha.reset();
      alert(response.data.message);
    });
  };
  let errorCount = 0;
  let errorMessage = "";
  if (Object.keys(errors).length > 0) {
    errorCount = Object.keys(errors).length;
    if (errors.message) {
      errors.message.message = "Veuillez renseigner votre message";
      errorMessage = errors.message.message;
    }
    if (errors.email) {
      errors.email.message = "Veuillez renseigner votre email";
      errorMessage = errors.email.message;
    }
    if (errors.name) {
      errors.name.message = "Veuillez renseigner votre nom";
      errorMessage = errors.name.message;
    }
  }

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
            {errorCount > 0 ? (
              <p className="alert alert-danger mt-3">{errorMessage}</p>
            ) : (
              ""
            )}
            <form onSubmit={handleSubmit(onSubmit)} id="contactForm">
              <div className="form-container mt-3">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="form-control"
                  {...register("name", { required: true, maxLength: 80 })}
                />
              </div>
              <div className="form-container mt-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="form-control"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </div>
              <div className="form-container mt-3">
                <textarea
                  name="message"
                  placeholder="Votre message"
                  className="form-control"
                  {...register("message", { required: true })}
                ></textarea>
              </div>
              <div className="mt-3">
                <div className="g-recaptcha" data-sitekey={recaptchaKey}></div>
              </div>
              <button type="submit" className="btn btn-green text-light  ">
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
