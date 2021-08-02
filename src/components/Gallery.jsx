import React from "react";
import "./styles/Gallery.css";
import GranosCafe from "../images/GranosCafe.svg";
import Gallery1 from "../images/Gallery1.jpg";
import Gallery2 from "../images/Gallery2.jpg";
import Gallery3 from "../images/Gallery3.jpg";
import Gallery4 from "../images/Gallery4.jpg";
import Gallery5 from "../images/Gallery5.jpg";
import Gallery6 from "../images/Gallery6.jpg";

class Gallery extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center mt-5">
              <img
                src={GranosCafe}
                className="efectoImg"
                width="30"
                alt="Logo de granos de café"
              />
            </div>
            <h2 className="text-center mt-1 mb-5">
              The most delicious grain in the entire region
            </h2>

            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src={Gallery1}
                className="w-100 shadow-1-strong rounded mb-4 efectoImg"
                alt=""
              />

              <img
                src={Gallery2}
                className="w-100 shadow-1-strong rounded mb-4 efectoImg"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={Gallery3}
                className="w-100 shadow-1-strong rounded mb-4 efectoImg"
                alt=""
              />

              <img
                src={Gallery4}
                className="w-100 shadow-1-strong rounded mb-4 efectoImg"
                alt=""
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src={Gallery5}
                className="w-100 shadow-1-strong rounded mb-4 efectoImg"
                alt=""
              />

              <img
                src={Gallery6}
                className="w-100 shadow-1-strong rounded mb-4 efectoImg"
                alt=""
              />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Gallery;
