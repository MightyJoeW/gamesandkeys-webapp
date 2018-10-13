// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/ESPJGXs_tDU';

// COMPONENT DEFINITION
const MoogCity2 = () => (
	<div>
		<TutorialContainer
			title='Moog City 2'
			videoUrl={videoUrl}
		/>
	</div>
);

export default MoogCity2;