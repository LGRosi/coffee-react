import React from "react";
import { Link } from "react-router-dom";
import './styles/Header.css';
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
                <Link to="/home"><li>Home</li></Link>
                <Link to="/about"><li className="mx-4">About</li></Link>
                <Link to="/products"><li>Products</li></Link>
                <Link to="/contact"><li className="mx-4">Contact</li></Link>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
