import "./Footer.scss";

const listFooter: string[] = [
  "FAQ",
  "Help Center",
  "Account",
  "Media Center",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Speed Test",
  "Legal Notices",
  "Netflix Originals",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">
        <ul className="first-list">
          {listFooter.map((textList) => ( 
             <li key={textList.toString()}>{textList}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
