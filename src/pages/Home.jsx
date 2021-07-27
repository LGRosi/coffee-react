import React from "react";
import tazaDeCafe from '../images/TazaDeCafe.png';
// import Banner from "../components/Banner";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="container mt-5">
          <h1 className="d-none">Cafetería</h1>
          <div className="row d-flex justify-content-center">
            <div className="col-4 mb-5">
              <p className="my-2 h1 text-center border-top border-bottom">Coffee shop brand</p>
              <h2 className="text-center h3">Familiar company</h2>
            </div>
            <div className="col-12">
              <img src={tazaDeCafe} width="400" alt="Taza de café" />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
