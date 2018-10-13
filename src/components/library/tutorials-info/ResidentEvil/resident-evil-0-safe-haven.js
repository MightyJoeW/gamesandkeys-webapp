// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/r9p2FxjKy0k';

// COMPONENT DEFINITION
const SafeHaven = () => (
	<div>
		<TutorialContainer
			title='Safe Haven'
			videoUrl={videoUrl}
		/>
	</div>
);

export default SafeHaven;