import './content.scss';
import { dataContent } from './dataContent';

export default function Content() {
  return (
    <>
      {dataContent.map(({ name, title, subtitle, src, isLeft }) => (
        <section key={name} className={`section-content ${isLeft && 'section-content_reverse'}`}>
          <div className={`${name}-media picture-box`}>
            {src && (
              <div className='box-video'>
                <iframe className='box-video__content' src={src} frameBorder='0' allow='autoplay' title='video' />
              </div>
            )}
          </div>
          <div className='content'>
            <h2 className='content__title'>{title}</h2>
            <h3 className='content__subtitle'>{subtitle}</h3>
          </div>
        </section>
      ))}
    </>
  );
}
