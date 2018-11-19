// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/LJvCmaAHKcE';

// COMPONENT DEFINITION
const PokemonLeague = () => (
	<TutorialWrapper
		midiRoute="Pokemon/pokemon-league-xy.mid"
		sheetRoute="Pokemon/pokemon-league-xy.png"
		title="Pokemon League"
		videoUrl={videoUrl}
	/>
);

export default PokemonLeague;