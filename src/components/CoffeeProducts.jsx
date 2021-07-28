import React from "react";
import './styles/CoffeeProducts.css';
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

            <div className="col-12 mb-4">
              <div className="row">
                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img src={cafe1} className="card-img-top SizeCoffee4 m-auto" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img src={cafe2} className="card-img-top SizeCoffee2 m-auto" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img src={cafe3} className="card-img-top SizeCoffee m-auto" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img src={cafe4} className="card-img-top SizeCoffee m-auto" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img src={cafe5} className="card-img-top SizeCoffee m-auto" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card border-0" width="18rem">
                    <img src={cafe6} className="card-img-top SizeCoffee3 m-auto" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
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
