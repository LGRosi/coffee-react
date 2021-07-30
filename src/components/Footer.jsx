import React from "react";
import { Link } from "react-router-dom";
import latteLogo from "../images/latte.svg";
import GranosFooter from "../images/GranosFooter.png";
import GranosFooter2 from "../images/GranosFooter2.png";
import Facebook from "../images/facebook.svg";
import Twitter from "../images/twitter.svg";
import Instagram from "../images/instagram.svg";
import Letter from "../images/letter.png";
import Cellphone from "../images/cellphone.png";
import House from "../images/house.png";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div className="row">
            <div className="col-4 mt-4">
              <div className="row">
                <div className="col-12 d-flex mb-2 justify-content-center">
                  <Link to="/home" className="subrayado">
                    <img
                      className="mb-3"
                      src={latteLogo}
                      alt="Logo de café"
                      width="60"
                      height="45"
                    />
                    Coffee
                  </Link>
                </div>
                <div className="col-12 text-center">
                  <p className="fw-bold ColorH3">Follow us on</p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <img src={Facebook} width="23" alt="Facebook" />
                  <img
                    src={Twitter}
                    width="23"
                    className="mx-4"
                    alt="Twitter"
                  />
                  <img src={Instagram} width="18" alt="Instagram" />
                </div>
              </div>
            </div>
            <div className="col-4 mt-4 pt-2">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <p className="fw-bold ColorH3">Contact Us</p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <div className="row">
                    <div className="col-2">
                      <img
                        src={Letter}
                        className="mb-4 pt-1"
                        width="19"
                        alt="Email"
                      />
                      <img
                        src={Cellphone}
                        className="mb-4 pt-1"
                        width="22"
                        alt="Cellphone"
                      />
                      <img src={House} width="24" alt="House" />
                    </div>
                    <div className="col-10">
                      <p className="mb-4">coffee@company.com</p>
                      <p className="mb-4 pt-1">+54 - 1123456789</p>
                      <p>False Avenue 1234</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 mt-4 pt-2">
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <p className="fw-bold ColorH3">Subscribe Newsletter</p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <div className="row">
                    <div className="col-6 mt-1 input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="btn bg-warning"
                        type="button"
                        id="button-addon2"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-2">
              <div className="row">
                <div className="col-3 d-flex align-items-end m-auto mb-3 pb-1">
                  <img
                    src={GranosFooter}
                    width="170"
                    alt="Bolsa de granos de café"
                  />
                </div>
                <div className="col-6 d-flex align-items-end pb-4 justify-content-center">
                  <p className="text-center border-top">
                    © 2021 for Coffee all right reserved | Lucas Gonzalo Rosi
                  </p>
                </div>
                <div className="col-3 d-flex align-items-end m-auto">
                  <img
                    src={GranosFooter2}
                    width="220"
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
