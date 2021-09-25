import { faqContent } from './faqContent';

export default function FAQ() {
  return (
    <div className='box-FAQ'>
      <div className='title-FAQ'>Frequently Asked Questions</div>
      {faqContent.map(({ title, content }) => (
          <details key={title} className='card-FAQ'>
            <summary className='card-FAQ__title'>
              {title}
              <small>+</small>
            </summary>
            <div className='card-FAQ__content'>{content}</div>
          </details>
      ))}
    </div>
  );
}
