import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="wrapper">
      <div className="wrapper-films">
        <div className="wrapper-films_dark">
          <div className="header">
            <div className="logo"></div>
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
                    placeholder="Email address"
                  />
                  <div className="email-form__btn">Get Started &gt;</div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
      <section className="tv">
        <div className="tv__content">
          <h2 className="tv__content-title">Enjoy on your TV.</h2>
          <h3 className="tv__content-subtitle">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h3>
        </div>
        <div className="tv__img picture-block">
          <div className="box-video">
            <video
              className="video-content"
              autoplay=""
              playsinline=""
              muted=""
              loop=""
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>
      <section className="watch-offline">
        <div className="watch-offline__img picture-block"></div>
        <div className="watch-offline__content">
          <h2 className="watch-offline__content-title">
            Download your shows to watch offline.
          </h2>
          <h3 className="watch-offline__content-subtitle">
            Save your favorites easily and always have something to watch.
          </h3>
        </div>
      </section>
      <section className="watch-everywhere">
        <div className="watch-everywhere__content">
          <h2 className="watch-everywhere__content-title">Watch everywhere.</h2>
          <h3 className="watch-everywhere__content-subtitle">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </h3>
        </div>
        <div className="watch-everywhere__img picture-block"></div>
      </section>
      <section className="kids-profiles">
        <div className="kids-profiles__img picture-block"></div>
        <div className="kids-profiles__content">
          <h2 className="kids-profiles__content-title">
            Create profiles for kids.
          </h2>
          <h3 className="kids-profiles__content-subtitle">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h3>
        </div>
      </section>
      <footer className="footer">
        <div className="footer__title">
          {" "}
          <a className="questions" href="#">
            Questions? Contact us.
          </a>
          <ul className="first-list">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Ways to Watch</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Speed Test</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
            <li>
              <a href="#">Netflix Originals</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
