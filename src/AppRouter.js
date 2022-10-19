import { Route, Switch } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import useAuth from './auth/useAuth';
import Home from './components/Home';

import Login from './components/Login';
import AlbumsPage from './components/AlbumsPage';
import PrivateRoute from './PrivateRoute';

function App() {
  const auth = useAuth();

  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-primary ">
        <div className="container">
          <Link to="/albums" className="nav-link navbar-text btn">Albums</Link>
          <Link to="/home" className="nav-link navbar-text btn">Home</Link>
          <button type="button" className="nav-link btn" onClick={auth.logout}>Logout</button>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/albums" component={AlbumsPage} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
