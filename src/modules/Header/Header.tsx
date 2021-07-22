import "./Header.scss";
import React from "react";

type Props = {
  isOpenModal: boolean;
  changeStateModal: (isOpenModal: boolean) => void;
};

export default function Header({ isOpenModal, changeStateModal }: Props) {
  const content = {
    title: "Unlimited movies, TV shows, and more.",
    subtitle: "Watch anywhere. Cancel anytime.",
    subsubtitle:
      "Ready to watch? Enter your email to create or restart your membership.",
  };
  const changeModal = () => changeStateModal(!isOpenModal);

  return (
    <div className="wrapper-films">
      <div className="wrapper-films_dark">
        <div className="header">
          <div className="logo"></div>
          <div className="btnSignIn" onClick={changeModal}>
            Sign In
          </div>
        </div>
        {!isOpenModal && (
          <main className="main">
            <div className="movies-subscription">
              <h1 className="movies-subscription__title">{content.title}</h1>
              <h3 className="movies-subscription__subtitle">
                {content.subtitle}
              </h3>
              <form className="email-form">
                <h3 className="movies-subscription__subsubtitle">
                  {content.subsubtitle}
                </h3>
                <div className="email-form__box">
                  <input
                    type="text"
                    className="email-form__input"
                    placeholder="enter your search data"
                  />
                  <div className="email-form__btn">Search &gt;</div>
                </div>
              </form>
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
