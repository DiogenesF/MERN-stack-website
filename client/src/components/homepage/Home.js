import React from "react";
import Carousel from "./Carousel";
import Header from "./Header";
import About from "./About";
import Portifolio from "./Portifolio";
import Contato from "./Contato";
import Members from "./Members";
import Footer from "./Footer";
const Home = (props) => {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <Members />
      <Portifolio />
      <Contato />
      <Footer />
    </div>
  );
};

export default Home;
