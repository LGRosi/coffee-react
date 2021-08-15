import React from "react";
import "./styles/CoffeeProducts.css";
import GranosCafe from "../images/GranosCafe.svg";
import carrito from "../images/Carrito.svg";
import cafe1 from "../images/cafe1.png";
import cafe2 from "../images/cafe2.png";
import cafe3 from "../images/cafe3.png";
import cafe4 from "../images/cafe4.png";
import cafe5 from "../images/cafe5.png";
import cafe6 from "../images/cafe6.png";

//EN LA CLASE 17 DE PLATZI

class CoffeeProducts extends React.Component {
  state = {
    data: [
      {
        id: 1,
        img: "../images/cafe1.png",
        title: "Guatemala Antigua",
        description1: "MEDIUM ROAST",
        description2: "Coffee beans Mildly spicy cocoa aroma",
        price: "2.88",
      },
      {
        id: 2,
        img: "../images/cafe2.png",
        title: "Colombia",
        description1: "MEDIUM ROAST",
        description2: "Coffee beans Intense flavor and nutty nuance",
        price: "2.99",
      },
      {
        id: 3,
        img: "../images/cafe3.png",
        title: "Kenya",
        description1: "MEDIUM ROAST",
        description2: "Coffee beans Juicy, intense and complex",
        price: "2.50",
      },
      {
        id: 4,
        img: "../images/cafe4.png",
        title: "Sumatra",
        description1: "DARK ROAST",
        description2: "Coffee beans Earthy and herbaceous",
        price: "2.75",
      },
      {
        id: 5,
        img: "../images/cafe5.png",
        title: "Verona",
        description1: "DARK ROAST",
        description2: "Coffee grains Black cocoa, roasted sweet",
        price: "2.98",
      },
      {
        id: 6,
        img: "../images/cafe6.png",
        title: "Espresso Roast",
        description1: "DARK ROAST",
        description2: "Coffee beans Aromatic and caramelized",
        price: "2.60",
      },
    ],
  };

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
                      alt="Taza de café"
                    />
                    <div className="card-body m-auto w-75 border-bottom">
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
                            <img
                              src={carrito}
                              width="18"
                              alt="Carrito de compras"
                            />
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

                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img
                      src={cafe2}
                      className="card-img-top SizeCoffee2 m-auto"
                      alt="Taza de café"
                    />
                    <div className="card-body m-auto w-75 border-bottom">
                      <h3 className="h5 ColorH3">Colombia</h3>
                      <p className="card-text mt-3">
                        MEDIUM ROAST |{" "}
                        <span className="text-muted">
                          Coffee beans Intense flavor and nutty nuance
                        </span>
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
                      <button
                        type="button"
                        className="btn btn-light w-100 border border-secondary"
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img
                      src={cafe3}
                      className="card-img-top SizeCoffee m-auto"
                      alt="Taza de café"
                    />
                    <div className="card-body m-auto w-75 border-bottom">
                      <h3 className="h5 ColorH3">Kenya</h3>
                      <p className="card-text mt-3">
                        MEDIUM ROAST |{" "}
                        <span className="text-muted">
                          Coffee beans Juicy, intense and complex
                        </span>
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
                      <button
                        type="button"
                        className="btn btn-light w-100 border border-secondary"
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img
                      src={cafe4}
                      className="card-img-top SizeCoffee m-auto mt-4"
                      alt="Taza de café"
                    />
                    <div className="card-body m-auto w-75 border-bottom">
                      <h3 className="h5 ColorH3">Sumatra</h3>
                      <p className="card-text mt-3">
                        DARK ROAST |{" "}
                        <span className="text-muted">
                          Coffee beans Earthy and herbaceous
                        </span>
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
                      <button
                        type="button"
                        className="btn btn-light w-100 border border-secondary"
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img
                      src={cafe5}
                      className="card-img-top SizeCoffee m-auto"
                      alt="Taza de café"
                    />
                    <div className="card-body m-auto w-75 border-bottom">
                      <h3 className="h5 ColorH3">Verona</h3>
                      <p className="card-text mt-3">
                        DARK ROAST |{" "}
                        <span className="text-muted">
                          Coffee grains Black cocoa, roasted sweet
                        </span>
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
                      <button
                        type="button"
                        className="btn btn-light w-100 border border-secondary"
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img
                      src={cafe6}
                      className="card-img-top SizeCoffee3 m-auto pb-0"
                      alt="Taza de café"
                    />
                    <div className="card-body m-auto w-75 pt-0 border-bottom">
                      <h3 className="h5 ColorH3">Espresso Roast</h3>
                      <p className="card-text mt-3">
                        DARK ROAST |{" "}
                        <span className="text-muted">
                          Coffee beans Aromatic and caramelized
                        </span>
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CoffeeProducts;
