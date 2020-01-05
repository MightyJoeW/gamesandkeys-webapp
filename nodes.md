Lazy loaded routes //kept getting error

index.js:1 ./src/routes.js
Module not found: Empty dependency (no request)

// EXTERNAL DEPENDENCIES
import React, { lazy } from 'react';
import { Router } from '@reach/router';

//Main Routes
const Library = lazy(() => import('./components/library/library'));
const ErrorPage = lazy(() => import('./components/error-page/error-page'));

// Tutorial Main Pages
const Spikes = lazy(() => import('./components/library/tutorials-info/1001Spikes'));
const BeyondTwoSouls = lazy(() => import('./components/library/tutorials-info/BeyondTwoSouls'));
const BobsBurgers = lazy(() => import('./components/library/tutorials-info/BobsBurgers'));
const Brothers = lazy(() => import('./components/library/tutorials-info/Brothers'));
const Catherine = lazy(() => import('./components/library/tutorials-info/Catherine'));
const Chroma = lazy(() => import('./components/library/tutorials-info/Chroma'));
const GrandTheftAuto = lazy(() => import('./components/library/tutorials-info/GrandTheftAuto'));
const Infamous = lazy(() => import('./components/library/tutorials-info/Infamous'));
const LifeIsStrange = lazy(() => import('./components/library/tutorials-info/LifeIsStrange'));
const Mashups = lazy(() => import('./components/library/tutorials-info/Mashups'));
const Minecraft = lazy(() => import('./components/library/tutorials-info/Minecraft'));
const NbaStreet = lazy(() => import(''));
const PlaystationCommercials = lazy(() => import('./components/library/tutorials-info/PlaystationCommercials'));
const Pokemon = lazy(() => import('./components/library/tutorials-info/Pokemon'));
const ResidentEvil = lazy(() => import('./components/library/tutorials-info/ResidentEvil'));
const TheLastOfUs = lazy(() => import('./components/library/tutorials-info/TheLastOfUs'));
const TheWalkingDeadGame = lazy(() => import('./components/library/tutorials-info/TheWalkingDeadGame'));
const ThomasWasAlone = lazy(() => import('./components/library/tutorials-info/ThomasWasAlone'));
const Transistor = lazy(() => import('./components/library/tutorials-info/Transistor'));
const Uncharted = lazy(() => import('./components/library/tutorials-info/Uncharted'));

// Individual Tutorial Routes
const SpikesTheme = lazy(() => import('./components/library/tutorials-info/1001Spikes/spikes'));
const Beyond = lazy(() => import('./components/library/tutorials-info/BeyondTwoSouls/beyond'));
const BeyondChildhood = lazy(() => import('./components/library/tutorials-info/BeyondTwoSouls/childhood-memories'));
const BeyondFriend = lazy(() => import('./components/library/tutorials-info/BeyondTwoSouls/my-imaginary-friend'));
const BeyondTrailer = lazy(() => import('./components/library/tutorials-info/BeyondTwoSouls/e3-trailer'));
const OilSpill = lazy(() => import('./components/library/tutorials-info/BobsBurgers/oil-spill'));
const BrothersTheme = lazy(() => import('./components/library/tutorials-info/Brothers/brothers'));
const CatherineStraySheep = lazy(() => import('./components/library/tutorials-info/Catherine/stray-sheep'));
const ChromaTheme = lazy(() => import('./components/library/tutorials-info/Chroma/chroma'));
const GrandTheftAutoTrailer = lazy(() => import('./components/library/tutorials-info/GrandTheftAuto/gtav-trailer-theme'));
const SecondSon = lazy(() => import('./components/library/tutorials-info/Infamous/second-son'));
const PianoFire = lazy(() => import('./components/library/tutorials-info/LifeIsStrange/piano-fire'));
const LastOfUncharted = lazy(() => import('./components/library/tutorials-info/Mashups/the-last-of-uncharted'));
const Ki = lazy(() => import('./components/library/tutorials-info/Minecraft/ki'));
const DeadVoxel = lazy(() => import('./components/library/tutorials-info/Minecraft/dead-voxel'));
const MoogCity2 = lazy(() => import('./components/library/tutorials-info/Minecraft/moog-city-2'));
const RideWitMe = lazy(() => import('./components/library/tutorials-info/NbaStreet/ride-wit-me'));
const PerfectDay = lazy(() => import('./components/library/tutorials-info/PlaystationCommercials/perfect-day'));
const PokemonLeague = lazy(() => import('./components/library/tutorials-info/Pokemon/pokemon-league'));
const SafeHaven = lazy(() => import('./components/library/tutorials-info/ResidentEvil/resident-evil-0-safe-haven'));
const MenuTheme = lazy(() => import('./components/library/tutorials-info/ResidentEvil/revelations-menu-theme'));
const PreviousStory = lazy(() => import('./components/library/tutorials-info/ResidentEvil/revelations-previous-story'));
const TheLastOfUsTheme = lazy(() => import('./components/library/tutorials-info/TheLastOfUs/the-last-of-us-theme'));
const VanishingGraceInnocence = lazy(() => import('./components/library/tutorials-info/TheLastOfUs/vanishing-grace-innocence'));
const AllGoneAftermath = lazy(() => import('./components/library/tutorials-info/TheLastOfUs/all-gone-aftermath'));
const AllGoneNoEscape = lazy(() => import('./components/library/tutorials-info/TheLastOfUs/all-gone-no-escape'));
const Fleeting = lazy(() => import('./components/library/tutorials-info/TheLastOfUs/fleeting'));
const Home = lazy(() => import('./components/library/tutorials-info/TheLastOfUs/home'));
const LeftBehindTogether = lazy(() => import('./components/library/tutorials-info/TheLastOfUs/left-behind-together'));
const LeftBehind = lazy(() => import('./components/library/tutorials-info/TheLastOfUs/left-behind'));
const SaltOfTheEarth = lazy(() => import('./components/library/tutorials-info/TheLastOfUs/salt-of-the-earth'));
const TheChoice = lazy(() => import('./components/library/tutorials-info/TheLastOfUs/the-choice'));
const Goodnight = lazy(() => import('./components/library/tutorials-info/TheLastOfUs/the-last-of-us-goodnight'));
const ThePath = lazy(() => import('./components/library/tutorials-info/TheLastOfUs/the-path-a-new-beginning'));
const TheWayItWas = lazy(() => import('./components/library/tutorials-info/TheLastOfUs/the-way-it-was'));
const TheWalkingDeadGameTheme = lazy(() => import('./components/library/tutorials-info/TheWalkingDeadGame/the-walking-dead-game-main-theme'));
const InTheWater = lazy(() => import('./components/library/tutorials-info/TheWalkingDeadGame/in-the-water'));
const WhereAreYou = lazy(() => import('./components/library/tutorials-info/ThomasWasAlone/where-are-you'));
const OldFriends = lazy(() => import('./components/library/tutorials-info/Transistor/old-friends'));
const DrakesReturn = lazy(() => import('./components/library/tutorials-info/Uncharted/drakes-return'));
const MuseumBust = lazy(() => import('./components/library/tutorials-info/Uncharted/museum-bust'));
const SmallBeginnings = lazy(() => import('./components/library/tutorials-info/Uncharted/small-beginnings'));

export default (
	<Router>
		{/* Pages */}
		<Library path='/' />

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
