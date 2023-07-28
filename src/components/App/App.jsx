import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from 'components/Loader/Loader';
import { Header, HeaderList } from './App.styled';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews';

const LazyHome = lazy(() => import('pages/Home/Home'));
const LazyMovies = lazy(() => import('pages/Movies/Movies'));
const LazyMovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

const App = () => {
  return (
    <div>
      <Header>
        <nav>
          <HeaderList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </HeaderList>
        </nav>
      </Header>
      <Suspense fallback={<Loader></Loader>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/movies/*" element={<LazyMovies />}>
            {/* <Route path="search" element={<MovieSearchResult />} /> */}
          </Route>
          <Route path="/movies/:movieId//*" element={<LazyMovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
