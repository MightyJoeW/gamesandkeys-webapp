// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/1bCWBUcuek0';

// COMPONENT DEFINITION
const Goodnight = () => (
	<div>
		<TutorialContainer
			title='The Last of Us (Goodnight)'
			videoUrl={videoUrl}
		/>
	</div>
);

export default Goodnight;