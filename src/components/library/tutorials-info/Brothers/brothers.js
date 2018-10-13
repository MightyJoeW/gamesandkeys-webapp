// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/VzKSLGtN09I';

// COMPONENT DEFINITION
const Brothers = () => (
	<div>
		<TutorialContainer
			title='Winged Hope'
			videoUrl={videoUrl}
		/>
	</div>
);

export default Brothers;
