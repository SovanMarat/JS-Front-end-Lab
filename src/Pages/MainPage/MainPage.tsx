import './MainPage.scss';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
import Modal from '../../modules/Modal';
import SearchResults from '../SearchResults/SearchResults';
import { ContentSection, FAQ } from '../../modules/Content';

export default function MainPage() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Route path='/' exact component={ContentSection} />
        <Route path='/' exact component={FAQ} />
        <Route path='/authorization' exact component={Modal} />
        <Route path='/search-results' exact component={SearchResults} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
