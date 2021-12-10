import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './layout/Header/Header';
import Home from './views/Home/Home';
import Bracket from './views/Bracket/Bracket';
import TeamList from './views/Team/TeamList/TeamList';
import PlayerList from './views/Player/PlayerList/PlayerList';
import AddTeam from './views/Team/AddTeam/AddTeam';
import AddPlayer from './views/Player/AddPlayer/AddPlayer';
import TeamDetail from './views/Team/TeamDetail/TeamDetail';
import PlayerDetail from "./views/Player/PlayerDetail/PlayerDetail";
import UpdateTeam from './views/Team/UpdateTeam/UpdateTeam';
import UpdatePlayer from './views/Player/UpdatePlayer/UpdatePlayer';
import './App.css';
import Footer from './layout/Footer/Footer';


function App() {
  return (
    <>
    <section className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/teams" component={TeamList} />
            <Route exact path="/players" component={PlayerList} />
            <Route exact path="/bracket" component={Bracket} />
            <Route exact path="/teams/new" component={AddTeam} />
            <Route exact path="/players/new" component={AddPlayer} />
            <Route exact path="/teams/:teamId" component={TeamDetail} />
            <Route exact path="/players/:id" component={PlayerDetail} />
            <Route exact path="/players/:id/update" component={UpdatePlayer} />
            <Route exact path="/teams/:teamId/update" component={UpdateTeam} />
          </Switch>
        </main>
      </Router>
    </section>
    <Footer />
    </>
  );
}

export default App;
