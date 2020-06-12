import React from "react";
import Carousel from "./Carousel";
import Header from "./Header";
import About from "./About";
import Portifolio from "./Portifolio";
import Contato from "./Contato";
const Home = (props) => {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <Portifolio />
      <Contato />
    </div>
  );
};

export default Home;
