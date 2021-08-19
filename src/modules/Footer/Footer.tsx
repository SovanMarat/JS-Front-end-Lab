import './Footer.scss';
import { Route, BrowserRouter, NavLink } from 'react-router-dom';
import { footerList } from './footerDataList';
import TestPage from '../../Pages/placeholderPage';

export default function Footer() {
  return (
    <BrowserRouter>
      <footer className='footer'>
        <div className='footer__title'>
          <ul className='first-list'>
            {footerList.map(textList => (
              <div key={textList.name.toString()}>
                <li>
                  <NavLink to={textList.href}>{textList.name}</NavLink>
                </li>
                <Route path={textList.href} component={TestPage} />
              </div>
            ))}
          </ul>
        </div>
      </footer>
    </BrowserRouter>
  );
}
