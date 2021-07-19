import "./App.css";
import React, { useState } from "react";
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";
import ContentTV from "./modules/Content/Tv";
import WatchOfline from "./modules/Content/WatchOfline";
import WatchEverywhere from "./modules/Content/WatchEverywhere";
import KidsProfiles from "./modules/Content/KidsProfiles";
import Modal from "./modules/Modal/Modal";

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const updateData = (value: boolean) => {
    setIsOpenModal(value);
  };

  return (
    <>
      <div className="wrapper">
        <Header updateData={updateData} isOpenModal={isOpenModal} />
        {isOpenModal ? (
          <Modal updateData={updateData} isOpenModal={isOpenModal} />
        ) : (
          <>
            <ContentTV />
            <WatchOfline />
            <WatchEverywhere />
            <KidsProfiles />
          </>
        )}
        <Footer />
      </div>
    </>
  );
}
