import "./App.css";
import React, { useState } from "react";
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";
import Content from "./modules/Content/Content";
import Modal from "./modules/Modal/Modal";

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const updateData = (value: boolean) => {
    setIsOpenModal(value);
  };

  return (
    <div className="wrapper">
      <Header updateData={updateData} isOpenModal={isOpenModal} />
      {isOpenModal ? (
        <Modal updateData={updateData} isOpenModal={isOpenModal} />
      ) : (
        <Content />
      )}
      <Footer />
    </div>
  );
}
