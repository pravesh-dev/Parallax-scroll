import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import img9 from "./assets/img9.jpg";
import mouse from "./assets/mouse.svg";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <img id="mouse" src={mouse} alt="" />
      <div id="container">
        <div className="boxes">
          <div data-scroll data-scroll-speed="-.26" className="img_wrapper">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="boxes">
          <div data-scroll data-scroll-speed="-.26" className="img_wrapper">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="boxes">
          <div data-scroll data-scroll-speed="-.26" className="img_wrapper">
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="boxes">
          <div data-scroll data-scroll-speed="-.26" className="img_wrapper">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="boxes">
          <div data-scroll data-scroll-speed="-.26" className="img_wrapper">
            <img src={img6} alt="" />
          </div>
        </div>
        <div className="boxes">
          <div data-scroll data-scroll-speed="-.26" className="img_wrapper">
            <img src={img7} alt="" />
          </div>
        </div>
        <div className="boxes">
          <div data-scroll data-scroll-speed="-.26" className="img_wrapper">
            <img src={img8} alt="" />
          </div>
        </div>
        <div className="boxes">
          <div data-scroll data-scroll-speed="-.26" className="img_wrapper">
            <img src={img9} alt="" />
          </div>
        </div>
        <div className="boxes">
          <div data-scroll data-scroll-speed="-.26" className="img_wrapper">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
