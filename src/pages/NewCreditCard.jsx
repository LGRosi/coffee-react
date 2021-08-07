import React from "react";
import CreditCard from "../components/CreditCard";
import FormCreditCard from "../components/FormCreditCard";


class NewCreditCard extends React.Component {
  state = {
    form: {
      cardNumber: "",
      cardholderName: "",
      mm: "",
      yy: "",
      ccv: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <section className="container my-5">
          <div className="row">
            <div className="col-6">
              <CreditCard
                cardNumber={this.state.form.cardNumber || "**** **** **** ****"}
                cardholderName={
                  this.state.form.cardholderName || "FULL NAME"
                }
                mm={this.state.form.mm || "MM"}
                yy={this.state.form.yy || "YY"}
                ccv={this.state.form.ccv || "***"}
              />
            </div>
            <div className="col-6">
              <FormCreditCard
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </section>

      </React.Fragment>
    );
  }
}

export default NewCreditCard;
