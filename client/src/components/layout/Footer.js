import React from "react";

const Footer = (props) => {
  return (
    <div>
      <footer className="text-center">
        <div className="mb-2">
          <small>
            © 2020 made with <i className="fa fa-heart"></i> by -{" "}
            <a rel="noopener noreferrer" href="https://azouaoui.netlify.com">
              Diogenes Fiorezi
            </a>
          </small>
        </div>
        <div>
          <a href="https://github.com/DiogenesF">
            <img
              alt="GitHub followers"
              src="https://img.shields.io/github/followers/DiogenesF?label=github&style=social"
            ></img>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
