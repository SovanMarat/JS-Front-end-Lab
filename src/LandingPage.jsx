import "./LandingPage.css";
import Header from "./modules/Header/Header";
import Footer from "./modules/Footer/Footer";

function LandingPage() {
  return (
    <div className="wrapper">
      <Header />
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
              autoPlay=""
              playsInline=""
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
      <Footer />
    </div>
  );
}

export default LandingPage;
