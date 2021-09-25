import { useState, useEffect, useRef } from 'react';
import './SearchResults.scss';
import Header from '../Header-search/Header-search';
import { genres } from './genres';
import data from './data.json';

export default function SearchResults() {
  const inputSearch = useRef<HTMLInputElement>(null);

  const [arrMovies, setArrMovies] = useState([
    {
      original_title: 'StartState',
      poster_path: 'poster_path',
      vote_average: 0,
      original_language: 'en',
      overview: 'overview',
      release_date: '01/01/2021',
      genre_ids: [1, 2, 3],
    },
  ]);
  const [page, setPage] = useState(1);
  const [valueState, setValueState] = useState('Loading...');
  const [arrMoviesTemp, setArrMoviesTemp] = useState([
    {
      original_title: 'StartState',
      poster_path: 'poster_path',
      vote_average: 0,
      original_language: 'en',
      overview: 'overview',
      release_date: '01/01/2021',
      genre_ids: [1, 2, 3],
    },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentUser, setCurrenUser] = useState(
    localStorage.getItem('currentUser') ? localStorage.getItem('currentUser') : 'guest',
  );
  const showMovie = (e: any) => {
    const currentMovie = e.currentTarget;
    const box = currentMovie.firstElementChild;
    const overview = box.lastElementChild;
    currentMovie.getAttribute('id') ? currentMovie.removeAttribute('id') : currentMovie.setAttribute('id', 'show');
    box.getAttribute('id') ? box.removeAttribute('id') : box.setAttribute('id', 'show-box');
    overview.getAttribute('id') ? overview.removeAttribute('id') : overview.setAttribute('id', 'show-overview');
  };
  const changeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);
  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  // find genre
  const findGenre = (currentId?: any) => genres.find(e => e.id === currentId)?.name;

  // sort
  const setSort = (value: string) => {
    value === 'min' && setArrMovies([...arrMovies].sort((a, b) => a.vote_average - b.vote_average));
    value === 'max' && setArrMovies([...arrMovies].sort((a, b) => b.vote_average - a.vote_average));
  };

  useEffect(() => {
    searchQuery && setValueState('Movie not found');
  }, [arrMovies]);

  // search
  useEffect(() => {
    setArrMovies(arrMoviesTemp.filter(e => e.original_title.toLowerCase().includes(searchQuery.toLowerCase())));
  }, [searchQuery]);

  useEffect(() => {
    const getMovies = async () => {
      const arr: Array<{
        original_title: string;
        poster_path: string;
        vote_average: number;
        original_language: string;
        overview: string;
        release_date: string;
        genre_ids: any;
      }> = [];
      const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${data.myKey}&language=en-US&page=${page}`;
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });

      if (response.ok) {
        const json = await response.json();
        json.results.forEach((e: any) => {
          arr.push(e);
        });
        setArrMovies(arr);
        setArrMoviesTemp(arr);
      } else {
        console.log(response.status);
      }
    };
    getMovies();
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <Header />
      <div className='wrapper wrapper-search'>
        <div className='search-box'>
          <input
            ref={inputSearch}
            value={searchQuery}
            className='search-box__input'
            placeholder='site search'
            onChange={changeSearchInput}
          />
          <div className='sort'>
            <div className='sort__title'>{data.title}</div>
            <div
              className='sort__btn'
              role='button'
              tabIndex={0}
              onClick={() => setSort('min')}
              onKeyDown={() => setSort('min')}
            >
              {data.min}
            </div>
            <div
              className='sort__btn'
              role='button'
              tabIndex={0}
              onClick={() => setSort('max')}
              onKeyDown={() => setSort('max')}
            >
              {data.max}
            </div>
          </div>
          <div>
            {data.hi}
            {currentUser}
          </div>
        </div>
        {arrMovies.length > 1 || (arrMovies.length === 1 && arrMovies[0].original_title !== 'StartState') ? (
          <div className='movies'>
            {arrMovies.map(e => (
              <div
                key={e.original_title}
                className='card-movie'
                role='button'
                tabIndex={0}
                onClick={showMovie}
                onKeyDown={showMovie}
              >
                <div className='movie'>
                  <img src={`${data.URL_poster}${e.poster_path}`} alt={e.original_title} className='poster' />
                  <div className='movie__title'>{e.original_title}</div>
                  <div className='movie__vote'>{e.vote_average}</div>
                  <div className='movie__overview'>
                    <div>{e.overview}</div>
                    <div className='movie__original-language'>
                      {data.original_language} {e.original_language}
                    </div>
                    <div className='movie__release-date'>
                      {data.release_date} {e.release_date}
                    </div>
                    <pre className='movie__genre-title'>
                      {data.genre}
                      {e.genre_ids.map((el, index) => (
                        <>
                          <div key={`${e.original_title}${el}`} className='movie__genre-ids'>
                            {findGenre(el)}
                          </div>
                          {index !== e.genre_ids.length - 1 && <pre>{', '}</pre>}
                        </>
                      ))}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='state-movies'>{valueState}</div>
        )}
        <div className='movies-nav'>
          <div
            className={`movies-nav__btn ${page === 1 && `btn-disabled`}`}
            role='button'
            tabIndex={0}
            onClick={prevPage}
            onKeyDown={prevPage}
          >
            {data.prev}
          </div>
          <div
            className={`movies-nav__btn ${page > 20 && `btn-disabled`}`}
            role='button'
            tabIndex={-1}
            onClick={nextPage}
            onKeyDown={nextPage}
          >
            {data.next}
          </div>
        </div>
      </div>
    </>
  );
}
