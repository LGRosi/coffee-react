import React from "react";
import "./styles/CoffeeProducts.css";
import carrito from "../images/Carrito.svg";
import GranosCafe from "../images/GranosCafe.svg";
import cafe1 from "../images/cafe1.png";
import cafe2 from "../images/cafe2.png";
import cafe3 from "../images/cafe3.png";
import cafe4 from "../images/cafe4.png";
import cafe5 from "../images/cafe5.png";
import cafe6 from "../images/cafe6.png";

class CoffeeProducts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img src={GranosCafe} width="30" alt="Logo de granos de café" />
            </div>
            <h2 className="text-center mt-1 mb-5">
              The most delicious grain in the entire region
            </h2>

            <div className="col-12 mt-4 mb-4">
              <div className="row">
                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img
                      src={cafe1}
                      className="card-img-top SizeCoffee4 m-auto mt-2"
                      alt="..."
                    />
                    <div className="card-body m-auto w-75 border-bottom">
                      <h3 className="h5 ColorH3">Guatemala Antigua</h3>
                      <p className="card-text mt-3">
                        MEDIUM ROAST | Coffee beans Mildly spicy cocoa aroma
                      </p>
                      <div className="row">
                        <div className="col-6">
                          <div>
                            <p className="mt-1 fw-bold">US$2.88</p>
                          </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                          <div>
                            <img
                              src={carrito}
                              width="18"
                              alt="Carrito de compras"
                            />
                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn btn-light w-100 border border-secondary">Buy</button>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img
                      src={cafe2}
                      className="card-img-top SizeCoffee2 m-auto"
                      alt="..."
                    />
                    <div className="card-body m-auto w-75 border-bottom">
                      <h3 className="h5 ColorH3">Colombia</h3>
                      <p className="card-text mt-3">
                        MEDIUM ROAST | Coffee beans Intense flavor and nutty
                        nuance
                      </p>
                      <div className="row">
                        <div className="col-6">
                          <div>
                            <p className="mt-1 fw-bold">US$2.99</p>
                          </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                          <div>
                            <img
                              src={carrito}
                              width="18"
                              alt="Carrito de compras"
                            />
                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn btn-light w-100 border border-secondary">Buy</button>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img
                      src={cafe3}
                      className="card-img-top SizeCoffee m-auto"
                      alt="..."
                    />
                    <div className="card-body m-auto w-75 border-bottom">
                      <h3 className="h5 ColorH3">Kenya</h3>
                      <p className="card-text mt-3">
                        MEDIUM ROAST | Coffee beans Juicy, intense and complex
                      </p>
                      <div className="row">
                        <div className="col-6">
                          <div>
                            <p className="fw-bold">US$2.50</p>
                          </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                          <div>
                            <img
                              src={carrito}
                              width="18"
                              alt="Carrito de compras"
                            />
                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn btn-light w-100 border border-secondary">Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img
                      src={cafe4}
                      className="card-img-top SizeCoffee m-auto mt-4"
                      alt="..."
                    />
                    <div className="card-body m-auto w-75 border-bottom">
                      <h3 className="h5 ColorH3">Sumatra</h3>
                      <p className="card-text mt-3">
                        DARK ROAST | Coffee beans Earthy and herbaceous
                      </p>
                      <div className="row">
                        <div className="col-6">
                          <div>
                            <p className="mt-1 fw-bold">US$2.75</p>
                          </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                          <div>
                            <img
                              src={carrito}
                              width="18"
                              alt="Carrito de compras"
                            />
                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn btn-light w-100 border border-secondary">Buy</button>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img
                      src={cafe5}
                      className="card-img-top SizeCoffee m-auto"
                      alt="..."
                    />
                    <div className="card-body m-auto w-75 border-bottom">
                      <h3 className="h5 ColorH3">Verona</h3>
                      <p className="card-text mt-3">
                        DARK ROAST | Coffee grains Black cocoa, roasted sweet
                      </p>
                      <div className="row">
                        <div className="col-6">
                          <div>
                            <p className="mt-1 fw-bold">US$2.98</p>
                          </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                          <div>
                            <img
                              src={carrito}
                              width="18"
                              alt="Carrito de compras"
                            />
                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn btn-light w-100 border border-secondary">Buy</button>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img
                      src={cafe6}
                      className="card-img-top SizeCoffee3 m-auto pb-0"
                      alt="..."
                    />
                    <div className="card-body m-auto w-75 pt-0 border-bottom">
                      <h3 className="h5 ColorH3">Espresso Roast</h3>
                      <p className="card-text mt-3">
                        DARK ROAST | Coffee beans Aromatic and caramelized
                      </p>
                      <div className="row">
                        <div className="col-6">
                          <div>
                            <p className="mt-1 fw-bold">US$2.60</p>
                          </div>
                        </div>
                        <div className="col-6 d-flex justify-content-center">
                          <div>
                            <img
                              src={carrito}
                              width="18"
                              alt="Carrito de compras"
                            />
                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn btn-light w-100 border border-secondary">Buy</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CoffeeProducts;
