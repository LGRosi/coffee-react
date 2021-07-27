import React from "react";
import Banner from "../components/Banner";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="container mt-5">
          <h1 className="d-none">Cafetería</h1>
          <Banner />
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
