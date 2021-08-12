import { Route, BrowserRouter } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage';
import SearchResults from './Pages/SearchResults/SearchResults';

export default function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={MainPage} />
      <Route path='/search-results' exact component={SearchResults} />
    </BrowserRouter>
  );
}
