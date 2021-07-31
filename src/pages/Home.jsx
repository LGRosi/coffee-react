import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
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

        <section className="container">
          <div className="row">
            <Gallery />
          </div>
        </section>

        <main className="container my-5 pt-5">
          <section className="row">
            <article>
              <CoffeeDescription />
            </article>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
