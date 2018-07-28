// External Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Internal Dependencies
// import Landing from './components/Landing/Landing';

//Main Routes
import Dashboard from './pages/Dashboard';
import Library from './pages/Library';
import Requests from './pages/Requests/Requests';
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
import Pokemon from './pages/Tutorials/Pokemon/index';
import ResidentEvil from './pages/Tutorials/ResidentEvil/index';
import TheLastOfUs from './pages/Tutorials/TheLastOfUs/index';
import TheWalkingDeadGame from './pages/Tutorials/TheWalkingDeadGame/index';
import ThomasWasAlone from './pages/Tutorials/ThomasWasAlone/index';
import Transistor from './pages/Tutorials/Transistor/index';
import Uncharted from './pages/Tutorials/Uncharted/index';

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
import PokemonLeague from './pages/Tutorials/Pokemon/pokemon-league';
import SafeHaven from './pages/Tutorials/ResidentEvil/resident-evil-0-safe-haven';
import MenuTheme from './pages/Tutorials/ResidentEvil/revelations-menu-theme';
import PreviousStory from './pages/Tutorials/ResidentEvil/revelations-previous-story';
import TheLastOfUsTheme from './pages/Tutorials/TheLastOfUs/the-last-of-us-theme';
import VanishingGraceInnocence from './pages/Tutorials/TheLastOfUs/vanishing-grace-innocence';
import AllGoneAftermath from './pages/Tutorials/TheLastOfUs/all-gone-aftermath';
import AllGoneNoEscape from './pages/Tutorials/TheLastOfUs/all-gone-no-escape';
import Fleeting from './pages/Tutorials/TheLastOfUs/fleeting';
import Home from './pages/Tutorials/TheLastOfUs/home';
import LeftBehindTogether from './pages/Tutorials/TheLastOfUs/left-behind-together';
import LeftBehind from './pages/Tutorials/TheLastOfUs/left-behind';
import SaltOfTheEarth from './pages/Tutorials/TheLastOfUs/salt-of-the-earth';
import TheChoice from './pages/Tutorials/TheLastOfUs/the-choice';
import Goodnight from './pages/Tutorials/TheLastOfUs/the-last-of-us-goodnight';
import ThePath from './pages/Tutorials/TheLastOfUs/the-path-a-new-beginning';
import TheWayItWas from './pages/Tutorials/TheLastOfUs/the-way-it-was';
import TheWalkingDeadGameTheme from './pages/Tutorials/TheWalkingDeadGame/the-walking-dead-game-main-theme';
import WhereAreYou from './pages/Tutorials/ThomasWasAlone/where-are-you';
import OldFriends from './pages/Tutorials/Transistor/old-friends';
import DrakesReturn from './pages/Tutorials/Uncharted/drakes-return';
import MuseumBust from './pages/Tutorials/Uncharted/museum-bust';
import SmallBeginnings from './pages/Tutorials/Uncharted/small-beginnings';

export default (
  <Switch>
    {/* Pages */}
    <Route exact path='/' component={Dashboard} />
    <Route path='/library' component={Library} />
    <Route path='/requests' component={Requests} />

    {/* 1001 Spikes */}
    <Route path='/1001-spikes' component={Spikes} />
    <Route path='/1001-spikes-main-theme' component={SpikesTheme} />

    {/* Beyond Two Souls */}
    <Route path='/beyond' component={Beyond} />
    <Route path='/beyond-e3-trailer' component={BeyondTrailer} />
    <Route path='/beyond-two-souls' component={BeyondTwoSouls} />
    <Route path='/childhood-memories' component={BeyondChildhood} />
    <Route path='/my-imaginary-friend' component={BeyondFriend} />

    {/* Bob's Burgers */}
    <Route path='/bobs-burgers' component={BobsBurgers} />
    <Route path='/oil-spill' component={OilSpill} />

    {/* Brothers: A Tale of Two Sons */}
    <Route path='/brothers' component={Brothers} />
    <Route path='/brothers-main-theme' component={BrothersTheme} />

    {/* Catherine */}
    <Route path='/catherine' component={Catherine} />
    <Route path='/stray-sheep' component={CatherineStraySheep} />

    {/* Chroma */}
    <Route path='/chroma' component={Chroma} />
    <Route path='/chroma-trailer-theme' component={ChromaTheme} />

    {/* Grand Theft Auto V */}
    <Route path='/grand-theft-auto' component={GrandTheftAuto} />
    <Route path='/grand-theft-auto-v-trailer-theme' component={GrandTheftAutoTrailer} />

    {/* inFAMOUS Second Son */}
    <Route path='/infamous' component={Infamous} />
    <Route path='/second-son' component={SecondSon} />

    {/* Life Is Strange */}
    <Route path='/life-is-strange' component={LifeIsStrange} />
    <Route path='/piano-fire' component={PianoFire} />

    {/* Minecraft */}
    <Route path='/minecraft' component={Minecraft} />
    <Route path='/dead-voxel' component={DeadVoxel} />
    <Route path='/ki' component={Ki} />
    <Route path='/moog-city-2' component={MoogCity2} />

    {/* Video Game Piano Mashups */}
    <Route path='/mashups' component={Mashups} />
    <Route path='/the-last-of-uncharted' component={LastofUncharted} />

    {/* NBA Street Vol. 2 */}
    <Route path='/nba-street' component={NbaStreet} />
    <Route path='/ride-wit-me' component={RideWitMe} />

    {/* Playstation Commercials */}
    <Route path='/playstation-commercials' component={PlaystationCommercials} />
    <Route path='/perfect-day' component={PerfectDay} />

    {/* Pokemon */}
    <Route path='/pokemon' component={Pokemon} />
    <Route path='/pokemon-league' component={PokemonLeague} />

    {/* Resident Evil */}
    <Route path='/resident-evil' component={ResidentEvil} />
    <Route path='/resident-evil-0-safe-haven' component={SafeHaven} />
    <Route path='/resident-evil-revelations-menu-theme' component={MenuTheme} />
    <Route path='/resident-evil-revelations-previous-story' component={PreviousStory} />

    {/* The Last of Us */}
    <Route path='/the-last-of-us' component={TheLastOfUs} />
    <Route path='/all-gone-aftermath' component={AllGoneAftermath} />
    <Route path='/all-gone-no-escape' component={AllGoneNoEscape} />
    <Route path='/fleeting' component={Fleeting} />
    <Route path='/home' component={Home} />
    <Route path='/left-behind' component={LeftBehind} />
    <Route path='/left-behind-together' component={LeftBehindTogether} />
    <Route path='/salt-of-the-earth' component={SaltOfTheEarth} />
    <Route path='/the-choice' component={TheChoice} />
    <Route path='/the-last-of-us-goodnight' component={Goodnight} />
    <Route path='/the-last-of-us-theme' component={TheLastOfUsTheme} />
    <Route path='/the-path-a-new-beginning' component={ThePath} />
    <Route path='/the-way-it-was' component={TheWayItWas} />
    <Route path='/vanishing-grace-innocence' component={VanishingGraceInnocence} />

    {/* The Walking Dead Game */}
    <Route path='/the-walking-dead-game-main-theme' component={TheWalkingDeadGameTheme} />
    <Route path='/the-walking-dead-game' component={TheWalkingDeadGame} />

    {/* Thomas Was Alone */}
    <Route path='/thomas-was-alone' component={ThomasWasAlone} />
    <Route path='/where-are-you' component={WhereAreYou} />

    {/* Transistor */}
    <Route path='/transistor' component={Transistor} />
    <Route path='/old-friends' component={OldFriends} />

    {/* Uncharted 3 */}
    <Route path='/uncharted' component={Uncharted} />
    <Route path='/drakes-return' component={DrakesReturn} />
    <Route path='/museum-bust' component={MuseumBust} />
    <Route path='/small-beginnings' component={SmallBeginnings} />

    {/* 404 */}
    <Route path='*' component={NotFound} />
  </Switch>
);
