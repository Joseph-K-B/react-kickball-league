import {BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import PlayerList from './views/PlayerList/PlayerList';
import TeamList from './views/TeamList/TeamList';

function App() {
  return (
    <section className="App">
    <Router>
    <header className="App-header">
      <h1>PDX Kickball League</h1>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/teams" exact>
          Teams
        </NavLink>
        <NavLink to="/players" exact>
          Players
        </NavLink>
      </nav>
    </header>
    <main>
      <Route exact path="/" component={Home}/>
      <Route exact path="/teams" component={TeamList}/>
      <Route exact path="/players" component={PlayerList}/>
    </main>
    </Router>
    </section>
  );
}

export default App;
