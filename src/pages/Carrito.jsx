import React from "react";
import CreditCard from "../components/CreditCard";

class Carrito extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="container">
          <h1 className="text-center">Credit Card</h1>
          <div className="row">
            <div className="col-6">
              <CreditCard />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Carrito;
