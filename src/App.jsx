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
import UpdatePlayer from './views/UpdatePlayer/UpdatePlayer';

function App() {
  return (
    <section className="App">
    <Router>
      <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/teams" component={TeamList}/>
        <Route exact path="/players" component={PlayerList}/>
        <Route exact path="/bracket" component={Bracket}/>
        <Route exact path="/teams/new" component={AddTeam} />
        <Route exact path="/players/new" component={AddPlayer}/>
        <Route exact path="/teams/:teamId" component={TeamDetail}/>
        <Route exact path="/players/:id" component={PlayerDetail}/>
        <Route exact path="/players/:id/update" component={UpdatePlayer}/>
        <Route exact path="/teams/:teamId/update" component={UpdateTeam}/>
      </Switch>
    </main>
    </Router>
    </section>
  );
}

export default App;
