import React from "react";
import ContactForm from "../components/ContactForm";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="container">
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6">
                  <ContactForm />
              </div>
            </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
