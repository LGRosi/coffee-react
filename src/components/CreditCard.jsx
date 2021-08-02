import React from "react";
import "./styles/CreditCard.css";
import Visa from "../images/visa.png";
import Chip from "../images/chip-tarjeta.png";
import NFC from "../images/nfc.png";

class CreditCard extends React.Component {
  render() {
    this.handleClick = (e) => {
      const tarjeta = document.querySelector(".tarjeta");
      tarjeta.classList.toggle("active");
    };

    return (
      <React.Fragment>
        <section className="container my-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="tarjeta" onClick={this.handleClick}>
                <div className="delantera">
                  <div className="logo-marca">
                    <img src={NFC} className="nfc" alt="Logo de NFC" />
                    <img src={Visa} alt="Logo de visa" />
                  </div>
                  <img src={Chip} className="chip" alt="Chip de la tarjeta" />
                  <div className="datos">
                    <div className="grupo">
                      <p className="label">Card number</p>
                      <p className="numero">{this.props.cardNumber}</p>
                    </div>
                    <div className="flexbox">
                      <div className="grupo">
                        <p className="label">Cardholder Name</p>
                        <p className="nombre">{this.props.cardholderName}</p>
                      </div>

                      <div className="grupo">
                        <p className="label">Expiration</p>
                        <p className="expiracion">
                          <span className="mes">{this.props.mm}</span> /{" "}
                          <span className="year">{this.props.yy}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="trasera h-100">
                  <div className="barra-magnetica"></div>
                  <div className="datos w-100">
                    <div className="grupo">
                      <p className="label">Firm</p>
                      <div className="firma">
                        <p></p>
                      </div>
                    </div>
                    <div className="grupo">
                      <p className="label">CCV</p>
                      <p className="ccv">{this.props.ccv}</p>
                    </div>
                  </div>
                  <p className="leyenda">
                    This card is issued by a global company in accordance with
                    the Visa license. If you have any questions you can contact
                    global coffee.
                  </p>
                  <a href="/" className="link-banco">
                    www.coffee.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default CreditCard;

// <section className="contenedor tarjeta" id="tarjeta">
//         <div className="delantera">
//           <div className="logo-marca" id="logo-marca">
//             <img src={Visa} alt="Tarjeta Visa" />
//           </div>
//           <img src={Chip} className="chip" alt="Chip de la tarjeta" />
//           <div className="datos">
//             <div className="grupo" id="numero">
//               <p className="label">Número Tarjeta</p>
//               <p className="numero">#### #### #### ####</p>
//             </div>
//             <div className="flexbox">
//               <div className="grupo" id="nombre">
//                 <p className="label">Nombre Tarjeta</p>
//                 <p className="nombre">Jhon Doe</p>
//               </div>

//               <div className="grupo" id="expiracion">
//                 <p className="label">Expiracion</p>
//                 <p className="expiracion">
//                   <span className="mes">MM</span> / <span className="year">AA</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="trasera">
//           <div className="barra-magnetica"></div>
//           <div className="datos">
//             <div className="grupo" id="firma">
//               <p className="label">Firma</p>
//               <div className="firma">
//                 <p></p>
//               </div>
//             </div>
//             <div className="grupo" id="ccv">
//               <p className="label">CCV</p>
//               <p className="ccv"></p>
//             </div>
//           </div>
//           <p className="leyenda">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
//             exercitationem, voluptates illo.
//           </p>
//           <a href="/" className="link-banco">
//             www.tubanco.com
//           </a>
//         </div>
//       </section>
