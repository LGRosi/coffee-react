import React from "react";
import "./styles/FormCreditCard.css";
import DropDown from "../images/dropdown.png";


class FormCreditCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="container mt-3">
          <div className="row">
            <div className="col-12">
              <h2 className="h3">Attach a new card</h2>
              <p>Add your credit card for faster checkout process</p>
            </div>
            <div className="col-12">
              <form action="/" className="formulario-tarjeta">
                <div className="grupo">
                  <input
                    className="inputNumero"
                    type="text"
                    placeholder="**** **** **** ****"
                    onChange={this.props.onChange}
                    name="cardNumber"
                    value={this.props.formValues.cardNumber}
                  />
                </div>
                <div className="grupo">
                  <label>Cardholder name</label>
                  <input
                    type="text"
                    placeholder="FULL NAME"
                    onChange={this.props.onChange}
                    name="cardholderName"
                    value={this.props.formValues.cardholderName}
                  />
                </div>
                <div className="flexbox">
                  <div className="grupo expira">
                    <label>Expiration</label>
                    <div className="flexbox">
                      <div className="grupo-select">
                        <select name="selectMounth" className="selectMounth">
                          <option
                            onChange={this.props.onChange}
                            name="mm"
                            value={this.props.formValues.mm}
                          >
                            MM
                          </option>
                        </select>
                        <img
                          src={DropDown}
                          className="i"
                          width="20"
                          alt="Drop down arrow"
                        />
                      </div>
                      <div className="grupo-select">
                        <select name="year" className="selectYear">
                          <option
                            onChange={this.props.onChange}
                            name="yy"
                            value={this.props.formValues.yy}
                          >
                            YY
                          </option>
                        </select>
                        <img
                          src={DropDown}
                          className="i"
                          width="20"
                          alt="Drop down arrow"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grupo ccv">
                    <label>CCV</label>
                    <input
                      type="text"
                      placeholder="***"

                      onChange={this.props.onChange}
                      name="ccv"
                      value={this.props.formValues.ccv}
                    />
                  </div>
                </div>
                <button type="button" className="btn-enviar">
                  Confirm
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




 // Validación Mes:
    // this.handleMounth = (e) => {
    //   const tarjeta = document.querySelector(".tarjeta");
    //   // const selectMounth = document.querySelector(".selectMounth");
    //   for (let i = 1; i <= 12; i++) {
    //     let opcion = document.createElement("option");
    //     opcion.value = i;
    //     opcion.innerText = i;
    //     tarjeta.appendChild(opcion);
    //   }
    // };
