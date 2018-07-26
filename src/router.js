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

// Tutorial Main Pages
import Spikes from './pages/Tutorials/1001Spikes/index';
import BeyondTwoSouls from './pages/Tutorials/BeyondTwoSouls/index';
import BobsBurgers from './pages/Tutorials/BobsBurgers/index';
import Brothers from './pages/Tutorials/Brothers/index';
import Catherine from './pages/Tutorials/Catherine/index';
import Chroma from './pages/Tutorials/Chroma/index';
import GrandTheftAuto from './pages/Tutorials/GrandTheftAuto/index';
import Infamous from './pages/Tutorials/Infamous/index';
import LifeIsStrange from './pages/Tutorials/LifeIsStrange/index';
import Mashups from './pages/Tutorials/Mashups/index';
import Minecraft from './pages/Tutorials/Minecraft/index';
import NbaStreet from './pages/Tutorials/NbaStreet/index';
import PlaystationCommercials from './pages/Tutorials/PlaystationCommercials/index';
import Pokemon from './pages/Tutorials/Pokemon';
import ResidentEvil from './pages/Tutorials/ResidentEvil';
import TheLastOfUs from './pages/Tutorials/TheLastOfUs';
import TheWalkingDeadGame from './pages/Tutorials/TheWalkingDeadGame';
import ThomasWasAlone from './pages/Tutorials/ThomasWasAlone';
import Transistor from './pages/Tutorials/Transistor';
import Uncharted from './pages/Tutorials/Uncharted';

// Individual Tutorial Routes
import SpikesTheme from './pages/Tutorials/1001Spikes/spikes';
import Beyond from './pages/Tutorials/BeyondTwoSouls/beyond';
import BeyondChildhood from './pages/Tutorials/BeyondTwoSouls/childhood-memories';
import BeyondFriend from './pages/Tutorials/BeyondTwoSouls/my-imaginary-friend';
import BeyondTrailer from './pages/Tutorials/BeyondTwoSouls/e3-trailer';
import OilSpill from './pages/Tutorials/BobsBurgers/oil-spill';
import BrothersTheme from './pages/Tutorials/Brothers/brothers';
import CatherineStraySheep from './pages/Tutorials/Catherine/stray-sheep';
import ChromaTheme from './pages/Tutorials/Chroma/chroma';
import GrandTheftAutoTrailer from './pages/Tutorials/GrandTheftAuto/gtav-trailer-theme';
import SecondSon from './pages/Tutorials/Infamous/second-son';
import PianoFire from './pages/Tutorials/LifeIsStrange/piano-fire';
import LastofUncharted from './pages/Tutorials/Mashups/the-last-of-uncharted';
import Ki from './pages/Tutorials/Minecraft/ki';
import DeadVoxel from './pages/Tutorials/Minecraft/dead-voxel';
import MoogCity2 from './pages/Tutorials/Minecraft/moog-city-2';
import RideWitMe from './pages/Tutorials/NbaStreet/ride-wit-me';
import PerfectDay from './pages/Tutorials/PlaystationCommercials/perfect-day';

export default (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route path='/help' component={Help} />
    <Route path='/library' component={Library} />
    <Route path='/requests' component={Requests} />
    <Route path='/about' component={About} />
    <Route path='/1001-spikes' component={Spikes} />
    <Route path='/1001-spikes-main-theme' component={SpikesTheme} />
    <Route path='/beyond' component={Beyond} />
    <Route path='/my-imaginary-friend' component={BeyondFriend} />
    <Route path='/beyond-two-souls' component={BeyondTwoSouls} />
    <Route path='/childhood-memories' component={BeyondChildhood} />
    <Route path='/beyond-e3-trailer' component={BeyondTrailer} />
    <Route path='/bobs-burgers' component={BobsBurgers} />
    <Route path='/oil-spill' component={OilSpill} />
    <Route path='/brothers' component={Brothers} />
    <Route path='/brothers-main-theme' component={BrothersTheme} />
    <Route path='/stray-sheep' component={CatherineStraySheep} />
    <Route path='/catherine' component={Catherine} />
    <Route path='/chroma' component={Chroma} />
    <Route path='/chroma-trailer-theme' component={ChromaTheme} />
    <Route path='/grand-theft-auto' component={GrandTheftAuto} />
    <Route path='/gtav-trailer-theme' component={GrandTheftAutoTrailer} />
    <Route path='/infamous' component={Infamous} />
    <Route path='/second-son' component={SecondSon} />
    <Route path='/life-is-strange' component={LifeIsStrange} />
    <Route path='/piano-fire' component={PianoFire} />
    <Route path='/mashups' component={Mashups} />
    <Route path='/the-last-of-uncharted' component={LastofUncharted} />
    <Route path='/minecraft' component={Minecraft} />
    <Route path='/ki' component={Ki} />
    <Route path='/dead-voxel' component={DeadVoxel} />
    <Route path='/moog-city-2' component={MoogCity2} />
    <Route path='/nba-street' component={NbaStreet} />
    <Route path='/ride-wit-me' component={RideWitMe} />
    <Route path='/playstation-commercials' component={PlaystationCommercials} />
    <Route path='/perfect-day' component={PerfectDay} />
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
