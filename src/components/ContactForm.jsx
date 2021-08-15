import React from "react";
import './styles/ContactForm.css';

class ContactForm extends React.Component {
  render() {
    return (
      <React.Fragment>
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
          <div className="grupo">
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
              placeholder="Cellphone"
              name="cardNumber"
              autoComplete="off"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default ContactForm;
