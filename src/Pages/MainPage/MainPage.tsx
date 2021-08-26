import './MainPage.scss';
import { Route, BrowserRouter } from 'react-router-dom';
import Modal from '../../modules/Modal';
import SearchPage from '../SearchPage/SearchPage';
import { ContentSection, FAQ } from '../../modules/Content';

export default function MainPage() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Route path='/' exact component={ContentSection} />
        <Route path='/' exact component={FAQ} />
        <Route path='/authorization' exact component={Modal} />
        <Route path='/search-results' exact component={SearchPage} />
      </div>
    </BrowserRouter>
  );
}
