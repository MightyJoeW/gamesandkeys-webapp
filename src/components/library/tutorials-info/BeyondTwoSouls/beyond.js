// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/B_jnltymaTg';

// COMPONENT DEFINITION
const Beyond = () => (
	<div>
		<TutorialContainer
			title='Beyond Two Souls: Main Theme'
			videoUrl={videoUrl}
		/>
	</div>
);

export default Beyond;
