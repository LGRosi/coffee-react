import React from "react";
import GranosCafe from "../images/GranosCafe.svg";
import Capuccino from "../images/Capuccino.png";
import IconMilkshake from "../images/IconMilkshake.png";
import IconGlass from "../images/IconGlass.png";
import IconBug from "../images/IconBug.png";
import IconCup from "../images/IconCup.png";
import IconGrain from "../images/IconGrain.png";
import IconMilk from "../images/IconMilk.png";

class CoffeeDescription extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container my-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img src={GranosCafe} width="30" alt="Logo de granos de café" />
            </div>
            <h2 className="text-center mt-1 mb-5">
              Smoothies and coffees with the best preparation
            </h2>

            <div className="col-12">
              <div className="row">
                <div className="col-4 mt-5">
                  <div className="row mb-3">
                    <div className="col-2">
                      <img src={IconMilkshake} width="33" alt="Milkshake" />
                    </div>
                    <div className="col-10">
                      <div className="row">
                        <div className="col-12">
                          <p className="mb-0 h6">Smoothies</p>
                          <p className="text-muted">
                            Smoothies with a wide variety of flavors. Options
                            for the moment of tropical fruits, chocolate caramel
                            sauce.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-2">
                      <img src={IconGlass} width="33" alt="Milkshake" />
                    </div>
                    <div className="col-10">
                      <div className="row">
                        <div className="col-12">
                          <p className="mb-0 h6">Coffees</p>
                          <p className="text-muted">
                            It is an elaborate, beer drink prepared from roasted
                            coffee beans, the seeds of the berries of certain
                            species.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2">
                      <img src={IconBug} width="33" alt="Milkshake" />
                    </div>
                    <div className="col-10">
                      <div className="row">
                        <div className="col-12">
                          <p className="mb-0 h6">Elaboration</p>
                          <p className="text-muted">
                            The plantation is the first stage of the coffee
                            production process. A natural cycle begins that will
                            see the seeds grow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-4 d-flex justify-content-center">
                  <img src={Capuccino} className="w-50" alt="Milkshake" />
                </div>

                <div className="col-4 mt-5">
                  <div className="row mb-3">
                    <div className="col-2">
                      <img src={IconCup} width="33" alt="Milkshake" />
                    </div>
                    <div className="col-10">
                      <div className="row">
                        <div className="col-12">
                          <p className="mb-0 h6">Tasting</p>
                          <p className="text-muted">
                            In roasting, the coffee gets its most characteristic
                            flavor and aroma. The grain is subjected to high
                            temperatures.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-2">
                      <img src={IconGrain} width="33" alt="Milkshake" />
                    </div>
                    <div className="col-10">
                      <div className="row">
                        <div className="col-12">
                          <p className="mb-0 h6">Grain</p>
                          <p className="text-muted">
                            Milling reduces the grain to powder through the use
                            of a mill. A more intense aroma and flavor is
                            obtained.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-2">
                      <img src={IconMilk} width="33" alt="Milkshake" />
                    </div>
                    <div className="col-10">
                      <div className="row">
                        <div className="col-12">
                          <p className="mb-0 h6">Milk</p>
                          <p className="text-muted">
                            Correctly steamed milk has a creamy texture and,
                            since it does not heat more than 60 °, it is
                            naturally sweet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CoffeeDescription;
