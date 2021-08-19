import { faqContent } from './faqContent';

export default function FAQ() {
  return (
    <div className='BoxFAQ'>
      <div className='titleFAQ'>Frequently Asked Questions</div>
      {faqContent.map(({ title }) => (
        <div key={title} className='cardFAQ'>
          {title}
          <div className='plusFAQ'>+</div>
        </div>
      ))}
    </div>
  );
}
