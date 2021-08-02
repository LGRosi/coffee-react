import React from "react";
import CreditCard from "../components/CreditCard";
import FormCreditCard from "../components/FormCreditCard";


class Carrito extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="container">
          <div className="row">
            <div className="col-6">
              <CreditCard />
            </div>
            <div className="col-6">
              <FormCreditCard />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Carrito;
