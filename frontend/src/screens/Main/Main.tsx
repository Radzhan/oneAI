import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import './Main.scss'
import Footer from "../../components/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="card-group container">
        <Card
          name="Lego"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdwBr_ofrA-xwBLBU5WIFBgn23fEikUq72w&s"
        />
        <Card
          name="Lego"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdwBr_ofrA-xwBLBU5WIFBgn23fEikUq72w&s"
        />
      </div>
      <Footer/>
    </>
  );
};

export default Main;
