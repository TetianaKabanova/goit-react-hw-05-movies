import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from 'components/Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

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
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies/*" element={<Movies />}></Route>
            <Route path="/movies/:movieId/*" element={<MovieDetails />}></Route>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
