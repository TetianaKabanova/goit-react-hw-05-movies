import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from 'components/Loader/Loader';
import { Header, HeaderList, Link } from './App.styled';
import Cast from 'pages/Cast/Cast';
import Reviews from 'pages/Reviews/Reviews';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

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
          <Route path="/" element={<Home />} />
          <Route path="/movies/*" element={<Movies />}>
            {/* <Route path="search" element={<MovieSearchResult />} /> */}
          </Route>
          <Route path="/movies/:movieId//*" element={<MovieDetails />}>
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
