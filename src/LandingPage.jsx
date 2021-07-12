import "./LandingPage.css";
import React, { useState } from "react";
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";
import Content from "./modules/Content/Content";
import Modal from "./modules/Modal/Modal";

function LandingPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const updateData = (value) => {
    setIsOpenModal(value);
    console.log(value);
  };

  return (
    <div className="wrapper">
      <Header updateData={updateData} isOpenModal={isOpenModal} />
      {isOpenModal ? <Modal updateData={updateData} isOpenModal={isOpenModal}/> : <Content />}
      <Footer />
    </div>
  );
}

export default LandingPage;
