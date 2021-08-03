import { watchEverywhere } from "./content.json";

export default function Content() {
  return (
    <section className="watch-everywhere">
      <div className="watch-everywhere__content">
        <h2 className="watch-everywhere__content-title">
          {watchEverywhere.title}
        </h2>
        <h3 className="watch-everywhere__content-subtitle">
          {watchEverywhere.subtitle}
        </h3>
      </div>
      <div className="watch-everywhere__img picture-block" />
    </section>
  );
}
