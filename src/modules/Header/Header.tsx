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
          <div className='logo' />
          <NavLink to='/authorization'>
            <div className='btnSignIn'>Sign In</div>
          </NavLink>
        </div>
        <main className='main'>
          <div className='movies-subscription'>
            <h1 className='movies-subscription__title'>{content.title}</h1>
            <h3 className='movies-subscription__subtitle'>{content.subtitle}</h3>
            <NavLink to='/search-results'>
              <div className='btn_search'>{content.btnSearch}</div>
            </NavLink>
          </div>
        </main>
      </div>
    </div>
  );
}
