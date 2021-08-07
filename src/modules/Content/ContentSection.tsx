import './content.scss';
import { dataContent } from './dataContent';

export default function Content() {
  return (
    <>
      {dataContent.map(({ name, title, subtitle, src, isLeft }) => (
        <section key={name} className={isLeft ? 'section_content' : 'section_content reverse-content'}>
          <div className={`${name}__img picture-block`}>
          {src && (
            <div className="box-video">
              <video className="video-content">
                <source src={src} type="video/mp4" />
                <track default kind="captions" />
              </video>
            </div>
          )}
          </div>
          <div className="content">
            <h2 className="content-title">{title}</h2>
            <h3 className="content-subtitle">{subtitle}</h3>
          </div>
        </section>
      ))}
    </>
  );
}
