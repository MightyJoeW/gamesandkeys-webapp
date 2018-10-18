// EXTERNAL DEPENDENCIES
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// INTERNAL DEPENDENCIES
// import Landing from './components/Landing/Landing';

//Main Routes
import Dashboard from './components/dashboard/dashboard';
import Library from './components/library/library';
import ErrorPage from './components/error-page/error-page';

// Tutorial Main Pages
import Spikes from './components/library/tutorials-info/1001Spikes';
import BeyondTwoSouls from './components/library/tutorials-info/BeyondTwoSouls';
import BobsBurgers from './components/library/tutorials-info/BobsBurgers';
import Brothers from './components/library/tutorials-info/Brothers';
import Catherine from './components/library/tutorials-info/Catherine';
import Chroma from './components/library/tutorials-info/Chroma';
import GrandTheftAuto from './components/library/tutorials-info/GrandTheftAuto';
import Infamous from './components/library/tutorials-info/Infamous';
import LifeIsStrange from './components/library/tutorials-info/LifeIsStrange';
import Mashups from './components/library/tutorials-info/Mashups';
import Minecraft from './components/library/tutorials-info/Minecraft';
import NbaStreet from './components/library/tutorials-info/NbaStreet';
import PlaystationCommercials from './components/library/tutorials-info/PlaystationCommercials';
import Pokemon from './components/library/tutorials-info/Pokemon';
import ResidentEvil from './components/library/tutorials-info/ResidentEvil';
import TheLastOfUs from './components/library/tutorials-info/TheLastOfUs';
import TheWalkingDeadGame from './components/library/tutorials-info/TheWalkingDeadGame';
import ThomasWasAlone from './components/library/tutorials-info/ThomasWasAlone';
import Transistor from './components/library/tutorials-info/Transistor';
import Uncharted from './components/library/tutorials-info/Uncharted';

// Individual Tutorial Routes
import SpikesTheme from './components/library/tutorials-info/1001Spikes/spikes';
import Beyond from './components/library/tutorials-info/BeyondTwoSouls/beyond';
import BeyondChildhood from './components/library/tutorials-info/BeyondTwoSouls/childhood-memories';
import BeyondFriend from './components/library/tutorials-info/BeyondTwoSouls/my-imaginary-friend';
import BeyondTrailer from './components/library/tutorials-info/BeyondTwoSouls/e3-trailer';
import OilSpill from './components/library/tutorials-info/BobsBurgers/oil-spill';
import BrothersTheme from './components/library/tutorials-info/Brothers/brothers';
import CatherineStraySheep from './components/library/tutorials-info/Catherine/stray-sheep';
import ChromaTheme from './components/library/tutorials-info/Chroma/chroma';
import GrandTheftAutoTrailer from './components/library/tutorials-info/GrandTheftAuto/gtav-trailer-theme';
import SecondSon from './components/library/tutorials-info/Infamous/second-son';
import PianoFire from './components/library/tutorials-info/LifeIsStrange/piano-fire';
import LastOfUncharted from './components/library/tutorials-info/Mashups/the-last-of-uncharted';
import Ki from './components/library/tutorials-info/Minecraft/ki';
import DeadVoxel from './components/library/tutorials-info/Minecraft/dead-voxel';
import MoogCity2 from './components/library/tutorials-info/Minecraft/moog-city-2';
import RideWitMe from './components/library/tutorials-info/NbaStreet/ride-wit-me';
import PerfectDay from './components/library/tutorials-info/PlaystationCommercials/perfect-day';
import PokemonLeague from './components/library/tutorials-info/Pokemon/pokemon-league';
import SafeHaven from './components/library/tutorials-info/ResidentEvil/resident-evil-0-safe-haven';
import MenuTheme from './components/library/tutorials-info/ResidentEvil/revelations-menu-theme';
import PreviousStory from './components/library/tutorials-info/ResidentEvil/revelations-previous-story';
import TheLastOfUsTheme from './components/library/tutorials-info/TheLastOfUs/the-last-of-us-theme';
import VanishingGraceInnocence from './components/library/tutorials-info/TheLastOfUs/vanishing-grace-innocence';
import AllGoneAftermath from './components/library/tutorials-info/TheLastOfUs/all-gone-aftermath';
import AllGoneNoEscape from './components/library/tutorials-info/TheLastOfUs/all-gone-no-escape';
import Fleeting from './components/library/tutorials-info/TheLastOfUs/fleeting';
import Home from './components/library/tutorials-info/TheLastOfUs/home';
import LeftBehindTogether from './components/library/tutorials-info/TheLastOfUs/left-behind-together';
import LeftBehind from './components/library/tutorials-info/TheLastOfUs/left-behind';
import SaltOfTheEarth from './components/library/tutorials-info/TheLastOfUs/salt-of-the-earth';
import TheChoice from './components/library/tutorials-info/TheLastOfUs/the-choice';
import Goodnight from './components/library/tutorials-info/TheLastOfUs/the-last-of-us-goodnight';
import ThePath from './components/library/tutorials-info/TheLastOfUs/the-path-a-new-beginning';
import TheWayItWas from './components/library/tutorials-info/TheLastOfUs/the-way-it-was';
import TheWalkingDeadGameTheme from './components/library/tutorials-info/TheWalkingDeadGame/the-walking-dead-game-main-theme';
import WhereAreYou from './components/library/tutorials-info/ThomasWasAlone/where-are-you';
import OldFriends from './components/library/tutorials-info/Transistor/old-friends';
import DrakesReturn from './components/library/tutorials-info/Uncharted/drakes-return';
import MuseumBust from './components/library/tutorials-info/Uncharted/museum-bust';
import SmallBeginnings from './components/library/tutorials-info/Uncharted/small-beginnings';

export default (
	<Switch>
		{/* Pages */}
		<Route exact path='/' component={Dashboard} />
		<Route path='/library' component={Library} />

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
		<Route path='/the-last-of-uncharted' component={LastOfUncharted} />

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
