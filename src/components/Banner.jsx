import React from "react";
import TazaGranoMobile from "../images/TazaGrano_mobile.png";
import TazaGranoTablet from "../images/TazaGrano_tablet.png";
import TazaGrano from "../images/TazaGrano.png";

class Banner extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row d-flex justify-content-center">
          <div className="col-10 col-sm-8 col-md-6 col-lg-4 mb-2">
            <p className="my-2 h1 text-center border-top border-bottom">
              Coffee shop brand
            </p>
            <h2 className="text-center h3">Familiar company</h2>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <figure>
              <picture>
                <source media="(max-width: 599px)" srcSet={TazaGranoMobile} />
                <source media="(max-width: 800px)" srcSet={TazaGranoTablet} />
                <img src={TazaGrano} width="950" className="img-fluid" alt="Taza de café" />
              </picture>
            </figure>
            
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
