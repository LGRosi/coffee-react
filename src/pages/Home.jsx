import React from "react";
import Banner from "../components/Banner";
import CoffeeDescription from "../components/CoffeeDescription";
import "../components/styles/Footer.css";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="container my-5">
          <h1 className="d-none">Cafetería</h1>
          <Banner />
        </section>

        <section className="container my-5 pt-5">
          <article className="row">
            <CoffeeDescription />
          </article>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
