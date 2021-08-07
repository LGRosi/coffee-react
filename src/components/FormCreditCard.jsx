import React from "react";
import "./styles/FormCreditCard.css";

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
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label=".form-select-lg example"
                          name="mm"
                          onChange={this.props.onChange}
                          value={this.props.formValues.mm}
                        >
                          <option className="MM">MM</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                      </div>
                      <div className="grupo-select">
                        <select
                          className="form-select form-select-lg mb-3"
                          aria-label=".form-select-lg example"
                          name="yy"
                          onChange={this.props.onChange}
                          value={this.props.formValues.yy}
                        >
                          <option value="YY">YY</option>
                          <option value="21">2021</option>
                          <option value="22">2022</option>
                          <option value="23">2023</option>
                          <option value="24">2024</option>
                          <option value="25">2025</option>
                          <option value="26">2026</option>
                          <option value="27">2027</option>
                          <option value="28">2028</option>
                        </select>
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
