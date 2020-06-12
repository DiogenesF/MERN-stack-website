import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactForm } from "../../redux/actions/contact";
import Alert from "../layout/Alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Contato = ({ alert: { loading }, contactForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    contactForm(formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h3 className="legis-size-title" style={{ color: "rgb(115, 0, 43)" }}>
            Contato
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>

        <div>
          <iframe
            title="map"
            style={{ border: "0", width: "100%", height: "270px" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameBorder="0"
          ></iframe>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i>
                  <FontAwesomeIcon icon="map-marker-alt" />
                </i>
                <h4>Local:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i>
                  <FontAwesomeIcon icon="envelope" />
                </i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i>
                  <FontAwesomeIcon icon="phone" />
                </i>
                <h4>Numero:</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input
                    onChange={(e) => onChange(e)}
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    value={name}
                    placeholder="Nome..."
                    data-rule="minlen:1"
                    data-msg="Digite pelo menos 1 caracter"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    onChange={(e) => onChange(e)}
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Email.."
                    data-rule="email"
                    data-msg="Digite um email valido"
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <input
                  onChange={(e) => onChange(e)}
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  value={subject}
                  placeholder="Assunto.."
                  data-rule="minlen:4"
                  data-msg="Digite pelo menos 4 caracteres"
                />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <textarea
                  onChange={(e) => onChange(e)}
                  className="form-control"
                  name="message"
                  rows="5"
                  value={message}
                  data-rule="required"
                  data-msg="Escreva algo"
                  placeholder="Mensagem"
                ></textarea>
                <div className="validate"></div>
              </div>
              {loading ? <h3>Loading...</h3> : <Alert />}

              <div className="text-center">
                <button className="btn btn-fox">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Contato.propTypes = {
  contactForm: PropTypes.func.isRequired,
  alert: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps, { contactForm })(Contato);
