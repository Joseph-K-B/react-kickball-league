import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Home from './views/Home/Home';
import PlayerDetail from './views/PlayerDetail/PlayerDetail';
import PlayerList from './views/PlayerList/PlayerList';
import TeamDetail from './views/TeamDetail/TeamDetail';
import TeamList from './views/TeamList/TeamList';
import './App.css';
import Bracket from './components/Bracket';

function App() {
  return (
    <section className="App">
    <Router>
      <Header />
    <main>
      <Route exact path="/" component={Home}/>
      <Route exact path="/teams" component={TeamList}/>
      <Route exact path="/teams/:teamId" component={TeamDetail}/>
      <Route exact path="/players" component={PlayerList}/>
      <Route exact path="/players/:id" component={PlayerDetail}/>
      <Route exact path="/bracket" component={Bracket}/>
    </main>
    </Router>
    </section>
  );
}

export default App;
