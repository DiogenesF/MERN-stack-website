import React from "react";
import FoxAbout from "../../images/foxabout.jpg";

const About = (props) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div style={{ marginTop: "50px" }} className="section-title">
          <h3 style={{ color: "rgb(115, 0, 43)" }} className="legis-size-title">
            SOBRE NÓS
          </h3>
        </div>

        <div className="row content">
          <div className="col-md-6">
            <img className="img-fluid" src={FoxAbout} alt="Sua imagem.."></img>
          </div>
          <div className="col-md-6">
            <p
              style={{ fontSize: "25px", marginTop: "40px", color: "#000000" }}
            >
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
