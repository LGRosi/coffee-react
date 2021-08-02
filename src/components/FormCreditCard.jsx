import React from "react";
import "./styles/FormCreditCard.css";

class FormCreditCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="container">
          <div className="row">
            <div className="col-12">
              <h2>Attach a new card</h2>
              <p>Add your credit card for faster checkout process</p>
            </div>
            <div className="col-12">
              <form
                action=""
                id="formulario-tarjeta"
                class="formulario-tarjeta"
              >
                <div class="grupo">
                  <input
                    type="text"
                    id="inputNumero"
                    placeholder="**** **** **** ****"
                    maxlength="19"
                    autocomplete="off"
                  />
                </div>
                <div class="grupo">
                  <label for="inputNombre">Nombre</label>
                  <input
                    type="text"
                    id="inputNombre"
                    maxlength="19"
                    autocomplete="off"
                  />
                </div>
                <div class="flexbox">
                  <div class="grupo ccv">
                    <label for="inputCCV">CCV</label>
                    <input type="text" id="inputCCV" maxlength="3" />
                  </div>
                </div>
                <button type="submit" class="btn-enviar">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FormCreditCard;
