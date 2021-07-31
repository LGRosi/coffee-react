import React from "react";
import CoffeeProducts from "../components/CoffeeProducts";

class Products extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className="container my-5 pb-5">
          <section className="row">
            <article>
              <CoffeeProducts />
            </article>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Products;
