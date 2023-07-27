import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from 'components/Loader/Loader';

const LazyHome = lazy(() => import('pages/Home/Home'));
const LazyMovies = lazy(() => import('pages/Movies'));
const LazyMovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader></Loader>}>
          <Routes>
            <Route path="/" element={<LazyHome />}></Route>
            <Route path="/movies/" element={<LazyMovies />}></Route>
            <Route
              path="/movies/:movieId/*"
              element={<LazyMovieDetails />}
            ></Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
