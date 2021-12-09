import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header/Header';
import Home from './views/Home/Home';
import PlayerDetail from './views/PlayerDetail/PlayerDetail';
import PlayerList from './views/PlayerList/PlayerList';
import TeamDetail from './views/TeamDetail/TeamDetail';
import TeamList from './views/TeamList/TeamList';
import AddTeam from './views/AddTeam/AddTeam';
import Bracket from './views/Bracket/Bracket';
import UpdateTeam from './views/UpdateTeam/UpdateTeam';
import AddPlayer from './views/AddPlayer/AddPlayer';
import './App.css';

function App() {
  return (
    <section className="App">
    <Router>
      <Header />
    <main>
      <Switch>
        <Route path="/teams/new" component={AddTeam} />
        <Route path="/players/new" component={AddPlayer}/>
        <Route path="/teams/:teamId" component={TeamDetail}/>
        <Route path="/teams/:teamId/update" component={UpdateTeam}/>
        <Route path="/players/:id" component={PlayerDetail}/>
        <Route path="/bracket" component={Bracket}/>
        <Route path="/players" component={PlayerList}/>
        <Route path="/teams" component={TeamList}/>
        <Route path="/" component={Home}/>
      </Switch>
    </main>
    </Router>
    </section>
  );
}

export default App;
