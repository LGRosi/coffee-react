import React from "react";
import GranosCafe from "../images/GranosCafe.svg";

class CoffeeDescription extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img src={GranosCafe} width="30" alt="Logo de granos de café" />
            </div>
            <h2 className="text-center mt-1 mb-5">
              The most delicious grain in the entire region
            </h2>

            <div className="col-12">
            
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CoffeeDescription;
