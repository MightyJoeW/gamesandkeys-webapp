// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/kPzFk_mytr0';

// COMPONENT DEFINITION
const PianoFire = () => (
	<div>
		<TutorialContainer
			title='Piano Fire'
			videoUrl={videoUrl}
		/>
	</div>
);

export default PianoFire;