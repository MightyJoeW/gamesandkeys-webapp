// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/EfawmKPbi-E';

// COMPONENT DEFINITION
const TheLastOfUncharted = () => (
	<div>
		<TutorialContainer
			title='The Last of Uncharted'
			videoUrl={videoUrl}
		/>
	</div>
);

export default TheLastOfUncharted;