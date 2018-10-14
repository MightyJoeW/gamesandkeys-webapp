// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/LJvCmaAHKcE';

// COMPONENT DEFINITION
const PokemonLeague = () => (
	<div>
		<TutorialContainer
			title='Pokemon League'
			videoUrl={videoUrl}
		/>
	</div>
);

export default PokemonLeague;