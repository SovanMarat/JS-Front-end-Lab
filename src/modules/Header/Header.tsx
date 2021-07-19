import "./Header.css";
import React from "react";

type HeaderProps = {
  isOpenModal: boolean,
  updateData: (isOpenModal:boolean) => void,
}

export default function Header({isOpenModal, updateData}:HeaderProps){
  return (
    <div className="wrapper-films">
      <div className="wrapper-films_dark">
        <div className="header">
          <div className="logo"></div>
          <div
            className="btnSignIn"
            onClick={() => updateData(!isOpenModal)}
          >
            Sign In
          </div>
        </div>
        <main className="main">
          <div className="movies-subscription">
            <h1 className="movies-subscription__title">
              Unlimited movies, TV shows, and more.
            </h1>
            <h3 className="movies-subscription__subtitle">
              Watch anywhere. Cancel anytime.
            </h3>
            <form className="email-form">
              <h3 className="movies-subscription__subsubtitle">
                Ready to watch? Enter your email to create or restart your
                membership.
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
      </div>
    </div>
  );
}
