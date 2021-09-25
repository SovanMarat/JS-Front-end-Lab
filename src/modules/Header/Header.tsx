import './Header.scss';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const content = {
    title: 'Unlimited movies, TV shows, and more.',
    subtitle: 'Watch anywhere. Cancel anytime.',
    btnSearch: 'Go to searching movies',
  };

  return (
    <div className='wrapper-films'>
      <div className='wrapper-films_dark'>
        <div className='header'>
          <NavLink to='/'>
            <div className='header__logo' />
          </NavLink>
          <NavLink to='/authorization'>
            <div className='header__btn-sign'>Sign In</div>
          </NavLink>
        </div>
        <main className='main'>
          <div className='movies-subscription'>
            <h1 className='movies-subscription__title'>{content.title}</h1>
            <h3 className='movies-subscription__subtitle'>{content.subtitle}</h3>
            <NavLink to='/search-results'>
              <button type='button' className='movies-subscription__btn-search'>
                {content.btnSearch}
              </button>
            </NavLink>
          </div>
        </main>
      </div>
    </div>
  );
}
