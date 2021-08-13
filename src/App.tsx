import './App.scss';
import { useState } from 'react';
import Header from './modules/Header';
import Footer from './modules/Footer';
import { ContentSection, FAQ } from './modules/Content';
import Modal from './modules/Modal';

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const changeStateModal = (value: boolean) => {
    setIsOpenModal(value);
  };

  return (
    <div className="wrapper">
      <Header changeStateModal={changeStateModal} isOpenModal={isOpenModal} />
      {isOpenModal ? (
        <Modal changeStateModal={changeStateModal} isOpenModal={isOpenModal} />
      ) : (
        <>
          <ContentSection />
          <FAQ />
        </>
      )}
      <Footer />
    </div>
  );
}
