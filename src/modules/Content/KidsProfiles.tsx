import { kidsProfiles } from "./content.json";

export default function Content() {
  return (
    <section className="kids-profiles">
      <div className="kids-profiles__img picture-block" />
      <div className="kids-profiles__content">
        <h2 className="kids-profiles__content-title">{kidsProfiles.title}</h2>
        <h3 className="kids-profiles__content-subtitle">
          {kidsProfiles.subtitle}
        </h3>
      </div>
    </section>
  );
}
