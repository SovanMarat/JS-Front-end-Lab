import '../Header/Header.scss';
import './Header-search.scss';
import { NavLink } from 'react-router-dom';

export default function Header() {

  return (
    <div className='wrapper-films wrapper-films_search'>
      <div className='wrapper-films_dark'>
        <div className='header'>
        <NavLink to='/'>
          <div className='header__logo' />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
