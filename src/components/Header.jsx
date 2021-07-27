import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import latteLogo from "../images/latte.svg";

class Header extends React.Component {
  render() {
    return (
      <header className="container">
        <h1 className="d-none">Logo de café</h1>
        <div className="row">
          <nav className="col-12 navbar navbar-light">
            <Link to="/home" className="navbar-brand">
              <img
                src={latteLogo}
                alt="Logo de café"
                width="40"
                height="28"
                className="d-inline-block align-text-top"
              />
              Coffee
            </Link>
            <ul className="d-flex justify-content-end mt-2 ulBotonera">
              <Link to="/home">
                <button type="button" class="btn">
                  Home
                </button>
              </Link>
              <Link className="subrayado" to="/about">
                <button className="mx-5" type="button" class="btn">
                  About
                </button>
              </Link>
              <Link className="subrayado" to="/products">
                <button type="button" class="btn">
                  Products
                </button>
              </Link>
              <Link className="subrayado" to="/contact">
                <button className="mx-5" type="button" class="btn">
                  Contact
                </button>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
