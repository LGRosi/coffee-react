import React from "react";
import "./styles/ContactForm.css";

function ContactForm () {
  return (
    <React.Fragment>
        <section className="container mt-3">
          <div className="row">
            <div className="col-12">
              <h2 className="h3">Contact</h2>
              <p>Leave us all your doubts</p>
            </div>
            <div className="col-12">
              <form action="/" className="formulario-tarjeta">
                <div className="grupo">
                  <input
                    className="inputNumero"
                    type="text"
                    placeholder="First name"
                    name="cardNumber"
                    autoComplete="off"
                  />
                </div>
                <div>
                  <input
                    className="inputNumero"
                    type="text"
                    placeholder="Last name"
                    name="cardNumber"
                    autoComplete="off"
                  />
                </div>
                <div className="grupo">
                  <input
                    className="inputNumero"
                    type="text"
                    placeholder="Email"
                    name="cardNumber"
                    autoComplete="off"
                  />
                </div>
                <div className="grupo">
                  <textarea
                    className="inputNumero"
                    placeholder="Leave us your comment"
                  ></textarea>
                </div>
                <button type="button" className="btn-enviar">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
  );
}

export default ContactForm;