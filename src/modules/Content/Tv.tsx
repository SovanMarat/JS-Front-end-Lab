import { tv } from "./content.json";

export default function Tv() {
  return (
    <section className="tv">
      <div className="tv__content">
        <h2 className="tv__content-title">{tv.title}</h2>
        <h3 className="tv__content-subtitle">{tv.subtitle}</h3>
      </div>
      <div className="tv__img picture-block">
        <div className="box-video">
          <video className="video-content">
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
