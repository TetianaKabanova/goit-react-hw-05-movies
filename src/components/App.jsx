// import { Cast } from 'pages/Cast';
// import Home from 'pages/Home';
// import { MovieDetails } from 'pages/MovieDetails';
// import { Movies } from 'pages/Movies';
// import { Reviews } from 'pages/Reviews';
import { lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const Cast = lazy(() => import('pages/Cast'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Reviews = lazy(() => import('pages/Reviews'));

export const App = () => {
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
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId/*" element={<MovieDetails />}></Route>
          <Route path="/movies/:movieId/cast/*" element={<Cast />}></Route>
          <Route
            path="/movies/:movieId/reviews/*"
            element={<Reviews />}
          ></Route>
        </Routes>
      </main>
    </div>
  );
};
