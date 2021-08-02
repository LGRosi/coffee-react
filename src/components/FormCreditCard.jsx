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
              <form
                action=""
                id="formulario-tarjeta"
                className="formulario-tarjeta"
              >
                <div className="grupo">
                  <input
                    type="text"
                    id="inputNumero"
                    placeholder="**** **** **** ****"
                    // maxlength="19"
                    // autocomplete="off"
                    onChange={this.props.onChange}
                    name="cardNumber"
                    value={this.props.formValues.cardNumber}
                  />
                </div>
                <div className="grupo">
                  <label>Cardholder name</label>
                  <input
                    type="text"
                    id="inputNombre"
                    // maxlength="19"
                    // autocomplete="off"
                    placeholder="PABLO ANTONIO RODRIGUEZ"
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
                        <select name="mes" id="selectMes">
                          <option
                            // disabled
                            // selected
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
                        <select name="year" id="selectYear">
                          <option
                            // disabled
                            // selected
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
                      id="inputCCV"
                      placeholder="***"
                      // maxlength="3"
                      onChange={this.props.onChange}
                      name="ccv"
                      value={this.props.formValues.ccv}
                    />
                  </div>
                </div>
                <button type="submit" className="btn-enviar">
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
