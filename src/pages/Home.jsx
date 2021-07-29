import React from "react";
import Banner from "../components/Banner";
import CoffeeProducts from "../components/CoffeeProducts";
import CoffeeDescription from "../components/CoffeeDescription";
import Footer from "../components/Footer";
import '../components/styles/Footer.css';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="container my-5">
          <h1 className="d-none">Cafetería</h1>
          <Banner />
        </section>

        <main className="container my-5 pt-5">
          <section className="row">
            <article>
              <CoffeeProducts />
            </article>
          </section>
        </main>

        <section className="container my-5 pt-5">
          <article className="row">
            <CoffeeDescription />
          </article>
        </section>

        <footer className="mt-5 footer">
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default Home;
