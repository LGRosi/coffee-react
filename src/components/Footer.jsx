import React from "react";
import { Link } from "react-router-dom";
import latteLogo from "../images/latte.svg";
import GranosFooter from "../images/GranosFooter.png";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-4 mt-5">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <Link to="/home" className="navbar-brand">
                    <img
                      src={latteLogo}
                      alt="Logo de café"
                      width="50"
                      height="38"
                    />
                    Coffee
                  </Link>
                </div>
                <div className="col-12 text-center">
                  <p>Follow us on:</p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <p>REDES SOCIALES</p>
                </div>
              </div>
            </div>
            <div className="col-4 mt-5">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <p>Contact Us</p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <div className="row">
                    <div className="col-2">
                      <p>Icon</p>
                    </div>
                    <div className="col-10">
                      <p>Titulo contacto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 mt-5">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <p>Subscribe Newsletter</p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <p>INPUT</p>
                </div>
              </div>
            </div>
            <div className="col-12 mt-2">
              <div className="row">
                <div className="col-3 d-flex align-items-end">
                  <img
                    src={GranosFooter}
                    width="170"
                    alt="Bolsa de granos de café"
                  />
                </div>
                <div className="col-6 d-flex align-items-end justify-content-center">
                  <p className="text-center border-top">
                    © 2021 for Coffee all right reserved | Lucas Gonzalo Rosi
                  </p>
                </div>
                <div className="col-3 d-flex align-items-end">
                  <img
                    src={GranosFooter}
                    width="170"
                    alt="Bolsa de granos de café"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
