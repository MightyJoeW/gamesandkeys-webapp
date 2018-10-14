// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/HnAu8DBAZmk';

// COMPONENT DEFINITION
const Chroma = () => (
	<div>
		<TutorialContainer
			title='Chroma - announce trailer theme'
			videoUrl={videoUrl} />
	</div>
);

export default Chroma;