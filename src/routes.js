// EXTERNAL DEPENDENCIES
import React from 'react';
import { Router } from '@reach/router';

// INTERNAL DEPENDENCIES
// import Landing from './components/Landing/Landing';

//Main Routes
// import Dashboard from './components/dashboard/dashboard';
import Library from './components/library/library';
import ErrorPage from './components/error-page/error-page';
import Requests from './components/requests/requests';

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
import InTheWater from './components/library/tutorials-info/TheWalkingDeadGame/in-the-water';
import WhereAreYou from './components/library/tutorials-info/ThomasWasAlone/where-are-you';
import OldFriends from './components/library/tutorials-info/Transistor/old-friends';
import DrakesReturn from './components/library/tutorials-info/Uncharted/drakes-return';
import MuseumBust from './components/library/tutorials-info/Uncharted/museum-bust';
import SmallBeginnings from './components/library/tutorials-info/Uncharted/small-beginnings';

export default (
	<Router>
		{/* Pages */}
		{/* <Dashboard path='/' /> */}
		<Library path='/' />
		<Requests path='/requests' />

		{/* 1001 Spikes */}
		<Spikes path='/1001-spikes' />
		<SpikesTheme path='/1001-spikes-main-theme' />

		{/* Beyond Two Souls */}
		<Beyond path='/beyond' />
		<BeyondTrailer path='/beyond-e3-trailer' />
		<BeyondTwoSouls path='/beyond-two-souls' />
		<BeyondChildhood path='/childhood-memories' />
		<BeyondFriend path='/my-imaginary-friend' />

		{/* Bob's Burgers */}
		<BobsBurgers path='/bobs-burgers' />
		<OilSpill path='/oil-spill' />

		{/* Brothers: A Tale of Two Sons */}
		<Brothers path='/brothers' />
		<BrothersTheme path='/brothers-main-theme' />

		{/* Catherine */}
		<Catherine path='/catherine' />
		<CatherineStraySheep path='/stray-sheep' />

		{/* Chroma */}
		<Chroma path='/chroma' />
		<ChromaTheme path='/chroma-trailer-theme' />

		{/* Grand Theft Auto V */}
		<GrandTheftAuto path='/grand-theft-auto' />
		<GrandTheftAutoTrailer path='/grand-theft-auto-v-trailer-theme' />

		{/* inFAMOUS Second Son */}
		<Infamous path='/infamous' />
		<SecondSon path='/second-son' />

		{/* Life Is Strange */}
		<LifeIsStrange path='/life-is-strange' />
		<PianoFire path='/piano-fire' />

		{/* Minecraft */}
		<Minecraft path='/minecraft' />
		<DeadVoxel path='/dead-voxel' />
		<Ki path='/ki' />
		<MoogCity2 path='/moog-city-2' />

		{/* Video Game Piano Mashups */}
		<Mashups path='/mashups' />
		<LastOfUncharted path='/the-last-of-uncharted' />

		{/* NBA Street Vol. 2 */}
		<NbaStreet path='/nba-street' />
		<RideWitMe path='/ride-wit-me' />

		{/* Playstation Commercials */}
		<PlaystationCommercials path='/playstation-commercials' />
		<PerfectDay path='/perfect-day' />

		{/* Pokemon */}
		<Pokemon path='/pokemon' />
		<PokemonLeague path='/pokemon-league' />

		{/* Resident Evil */}
		<ResidentEvil path='/resident-evil' />
		<SafeHaven path='/resident-evil-0-safe-haven' />
		<MenuTheme path='/resident-evil-revelations-menu-theme' />
		<PreviousStory path='/resident-evil-revelations-previous-story' />

		{/* The Last of Us */}
		<TheLastOfUs path='/the-last-of-us' />
		<AllGoneAftermath path='/all-gone-aftermath' />
		<AllGoneNoEscape path='/all-gone-no-escape' />
		<Fleeting path='/fleeting' />
		<Home path='/home' />
		<LeftBehind path='/left-behind' />
		<LeftBehindTogether path='/left-behind-together' />
		<SaltOfTheEarth path='/salt-of-the-earth' />
		<TheChoice path='/the-choice' />
		<Goodnight path='/the-last-of-us-goodnight' />
		<TheLastOfUsTheme path='/the-last-of-us-theme' />
		<ThePath path='/the-path-a-new-beginning' />
		<TheWayItWas path='/the-way-it-was' />
		<VanishingGraceInnocence path='/vanishing-grace-innocence' />

		{/* The Walking Dead Game */}
		<InTheWater path='/the-walking-dead-game-season-2-reveal-trailer' />
		<TheWalkingDeadGame path='/the-walking-dead-game' />
		<TheWalkingDeadGameTheme path='/the-walking-dead-game-main-theme' />

		{/* Thomas Was Alone */}
		<ThomasWasAlone path='/thomas-was-alone' />
		<WhereAreYou path='/where-are-you' />

		{/* Transistor */}
		<Transistor path='/transistor' />
		<OldFriends path='/old-friends' />

		{/* Uncharted 3 */}
		<Uncharted path='/uncharted' />
		<DrakesReturn path='/drakes-return' />
		<MuseumBust path='/museum-bust' />
		<SmallBeginnings path='/small-beginnings' />

		{/* 404 */}
		<ErrorPage path='*' />
	</Router>
);
