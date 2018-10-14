// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/T92IROWXd4w';

// COMPONENT DEFINITION
const Ki = () => (
	<div>
		<TutorialContainer
			title='Ki'
			videoUrl={videoUrl}
		/>
	</div>
);

export default Ki;