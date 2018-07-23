// External Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Internal Dependencies
// import Landing from './components/Landing/Landing';

//Main Routes
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import Requests from './pages/Requests/Requests';
import About from './pages/About';
import Help from './pages/Help';
import NotFound from './pages/NotFound/NotFound';

// Tutorial Pages
import Spikes from './pages/Tutorials/1001Spikes';
import Beyond from './pages/Tutorials/BeyondTwoSouls';
import Bobs from './pages/Tutorials/BobsBurgers';
import Brothers from './pages/Tutorials/Brothers';
import Catherine from './pages/Tutorials/Catherine';
import Chroma from './pages/Tutorials/Chroma';
import GrandTheftAuto from './pages/Tutorials/GrandTheftAuto';
import Infamous from './pages/Tutorials/Infamous';
import LifeIsStrange from './pages/Tutorials/LifeIsStrange';
import Mashups from './pages/Tutorials/Mashups';
import Minecraft from './pages/Tutorials/Minecraft';
import NbaStreet from './pages/Tutorials/NbaStreet';
import PlaystationCommercials from './pages/Tutorials/PlaystationCommercials';
import Pokemon from './pages/Tutorials/Pokemon';
import ResidentEvil from './pages/Tutorials/ResidentEvil';
import TheLastOfUs from './pages/Tutorials/TheLastOfUs';
import TheWalkingDeadGame from './pages/Tutorials/TheWalkingDeadGame';
import ThomasWasAlone from './pages/Tutorials/ThomasWasAlone';
import Transistor from './pages/Tutorials/Transistor';
import Uncharted from './pages/Tutorials/Uncharted';

export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/library' component={Library} />
    <Route path='/requests' component={Requests} />
    <Route path='/about' component={About} />
    <Route path='/1001-spikes' component={Spikes} />
    <Route path='/beyond-two-souls' component={Beyond} />
    <Route path='/bobs-burgers' component={Bobs} />
    <Route path='/brothers' component={Brothers} />
    <Route path='/catherine' component={Catherine} />
    <Route path='/chroma' component={Chroma} />
    <Route path='/grand-theft-auto' component={GrandTheftAuto} />
    <Route path='/infamous' component={Infamous} />
    <Route path='/life-is-strange' component={LifeIsStrange} />
    <Route path='/mashups' component={Mashups} />
    <Route path='/minecraft' component={Minecraft} />
    <Route path='/nba-street' component={NbaStreet} />
    <Route path='/playstation-commercials' component={PlaystationCommercials} />
    <Route path='/pokemon' component={Pokemon} />
    <Route path='/resident-evil' component={ResidentEvil} />
    <Route path='/the-last-of-us' component={TheLastOfUs} />
    <Route path='/the-walking-dead-game' component={TheWalkingDeadGame} />
    <Route path='/thomas-was-alone' component={ThomasWasAlone} />
    <Route path='/transistor' component={Transistor} />
    <Route path='/uncharted' component={Uncharted} />
    <Route path='*' component={NotFound} />
  </Switch>
);
