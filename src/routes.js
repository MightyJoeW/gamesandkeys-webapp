// EXTERNAL DEPENDENCIES
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// INTERNAL DEPENDENCIES
// import Landing from './components/Landing/Landing';

//Main Routes
import Dashboard from './pages/dashboard/dashboard';
import Library from './pages/library/library';
import Requests from './pages/requests/requests.jsx';
import ErrorPage from './pages/error-page/error-page';

// Tutorial Main Pages
import Spikes from './components/Tutorials/1001Spikes';
import BeyondTwoSouls from './components/Tutorials/BeyondTwoSouls';
import BobsBurgers from './components/Tutorials/BobsBurgers';
import Brothers from './components/Tutorials/Brothers';
import Catherine from './components/Tutorials/Catherine';
import Chroma from './components/Tutorials/Chroma';
import GrandTheftAuto from './components/Tutorials/GrandTheftAuto';
import Infamous from './components/Tutorials/Infamous';
import LifeIsStrange from './components/Tutorials/LifeIsStrange';
import Mashups from './components/Tutorials/Mashups';
import Minecraft from './components/Tutorials/Minecraft';
import NbaStreet from './components/Tutorials/NbaStreet';
import PlaystationCommercials from './components/Tutorials/PlaystationCommercials';
import Pokemon from './components/Tutorials/Pokemon';
import ResidentEvil from './components/Tutorials/ResidentEvil';
import TheLastOfUs from './components/Tutorials/TheLastOfUs';
import TheWalkingDeadGame from './components/Tutorials/TheWalkingDeadGame';
import ThomasWasAlone from './components/Tutorials/ThomasWasAlone';
import Transistor from './components/Tutorials/Transistor';
import Uncharted from './components/Tutorials/Uncharted';

// Individual Tutorial Routes
import SpikesTheme from './components/Tutorials/1001Spikes/spikes';
import Beyond from './components/Tutorials/BeyondTwoSouls/beyond';
import BeyondChildhood from './components/Tutorials/BeyondTwoSouls/childhood-memories';
import BeyondFriend from './components/Tutorials/BeyondTwoSouls/my-imaginary-friend';
import BeyondTrailer from './components/Tutorials/BeyondTwoSouls/e3-trailer';
import OilSpill from './components/Tutorials/BobsBurgers/oil-spill';
import BrothersTheme from './components/Tutorials/Brothers/brothers';
import CatherineStraySheep from './components/Tutorials/Catherine/stray-sheep';
import ChromaTheme from './components/Tutorials/Chroma/chroma';
import GrandTheftAutoTrailer from './components/Tutorials/GrandTheftAuto/gtav-trailer-theme';
import SecondSon from './components/Tutorials/Infamous/second-son';
import PianoFire from './components/Tutorials/LifeIsStrange/piano-fire';
import LastofUncharted from './components/Tutorials/Mashups/the-last-of-uncharted';
import Ki from './components/Tutorials/Minecraft/ki';
import DeadVoxel from './components/Tutorials/Minecraft/dead-voxel';
import MoogCity2 from './components/Tutorials/Minecraft/moog-city-2';
import RideWitMe from './components/Tutorials/NbaStreet/ride-wit-me';
import PerfectDay from './components/Tutorials/PlaystationCommercials/perfect-day';
import PokemonLeague from './components/Tutorials/Pokemon/pokemon-league';
import SafeHaven from './components/Tutorials/ResidentEvil/resident-evil-0-safe-haven';
import MenuTheme from './components/Tutorials/ResidentEvil/revelations-menu-theme';
import PreviousStory from './components/Tutorials/ResidentEvil/revelations-previous-story';
import TheLastOfUsTheme from './components/Tutorials/TheLastOfUs/the-last-of-us-theme';
import VanishingGraceInnocence from './components/Tutorials/TheLastOfUs/vanishing-grace-innocence';
import AllGoneAftermath from './components/Tutorials/TheLastOfUs/all-gone-aftermath';
import AllGoneNoEscape from './components/Tutorials/TheLastOfUs/all-gone-no-escape';
import Fleeting from './components/Tutorials/TheLastOfUs/fleeting';
import Home from './components/Tutorials/TheLastOfUs/home';
import LeftBehindTogether from './components/Tutorials/TheLastOfUs/left-behind-together';
import LeftBehind from './components/Tutorials/TheLastOfUs/left-behind';
import SaltOfTheEarth from './components/Tutorials/TheLastOfUs/salt-of-the-earth';
import TheChoice from './components/Tutorials/TheLastOfUs/the-choice';
import Goodnight from './components/Tutorials/TheLastOfUs/the-last-of-us-goodnight';
import ThePath from './components/Tutorials/TheLastOfUs/the-path-a-new-beginning';
import TheWayItWas from './components/Tutorials/TheLastOfUs/the-way-it-was';
import TheWalkingDeadGameTheme from './components/Tutorials/TheWalkingDeadGame/the-walking-dead-game-main-theme';
import WhereAreYou from './components/Tutorials/ThomasWasAlone/where-are-you';
import OldFriends from './components/Tutorials/Transistor/old-friends';
import DrakesReturn from './components/Tutorials/Uncharted/drakes-return';
import MuseumBust from './components/Tutorials/Uncharted/museum-bust';
import SmallBeginnings from './components/Tutorials/Uncharted/small-beginnings';

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
		<Route path='*' component={ErrorPage} />
	</Switch>
);
