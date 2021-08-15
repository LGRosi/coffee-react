import React from "react";
import carrito from "../images/Carrito.svg";
import cafe1 from "../images/cafe1.png";

function ASingleCoffee() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card border-0" width="18rem">
              <img
                src={cafe1}
                className="card-img-top SizeCoffee4 m-auto mt-2"
                alt="..."
              />
              <div className="card-body m-auto w-100 border-bottom">
                <h3 className="h5 ColorH3">Guatemala Antigua</h3>
                <p className="card-text mt-3">
                  MEDIUM ROAST |{" "}
                  <span className="text-muted">
                    Coffee beans Mildly spicy cocoa aroma
                  </span>
                </p>
                <div className="row">
                  <div className="col-6">
                    <div>
                      <p className="mt-1 fw-bold">US$2.88</p>
                    </div>
                  </div>
                  <div className="col-6 d-flex justify-content-center">
                    <div>
                      <img src={carrito} width="18" alt="Carrito de compras" />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-light w-100 border border-secondary"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ASingleCoffee;
