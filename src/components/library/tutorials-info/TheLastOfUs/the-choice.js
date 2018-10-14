// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/kq8qR5kmFtM';

// COMPONENT DEFINITION
const TheChoice = () => (
	<div>
		<TutorialContainer
			title='The Choice'
			videoUrl={videoUrl}
		/>
	</div>
);

export default TheChoice;