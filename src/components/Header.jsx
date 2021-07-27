import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";
import latteLogo from "../images/latte.svg";
import carrito from "../images/Carrito.svg";

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
            <ul className="mt-3 ulBotonera">
              <Link to="/home">
                <button className="btn" type="button">
                  Home
                </button>
              </Link>
              <Link to="/about">
                <button className="mx-lg-4 btn" type="button">
                  About
                </button>
              </Link>
              <Link to="/products">
                <button className="btn" type="button">
                  Products
                </button>
              </Link>
              <Link to="/contact">
                <button className="mx-lg-4 btn" type="button">
                  Contact
                </button>
              </Link>
              <Link to="/carrito">
                <img
                  src={carrito}
                  width="20"
                  alt="Carrito de compras"
                />
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
