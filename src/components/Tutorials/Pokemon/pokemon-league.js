// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

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