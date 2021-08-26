import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Header from './modules/Header';
import Footer from './modules/Footer';
import Modal from './modules/Modal';
import MainPage from './Pages/MainPage/MainPage';
import SearchPage from './Pages/SearchPage/SearchPage';

export default function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Header} />
      <Route path='/authorization' exact component={Header}/>
      <Route path='/' exact component={MainPage} />
      <Route path='/search-results' exact component={SearchPage} />
      <Route path='/authorization' exact component={Modal} />
      <Redirect to='/' />
      <Footer/>
    </BrowserRouter>
  );
}
