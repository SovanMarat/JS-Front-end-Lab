import { watchOffline } from "./content.json";

export default function Content() {
  return (
    <section className="watch-offline">
      <div className="watch-offline__img picture-block"></div>
      <div className="watch-offline__content">
        <h2 className="watch-offline__content-title">
          {watchOffline.title}
        </h2>
        <h3 className="watch-offline__content-subtitle">
          {watchOffline.subtitle}
        </h3>
      </div>
    </section>
  );
}
