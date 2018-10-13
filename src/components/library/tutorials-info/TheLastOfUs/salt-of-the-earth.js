// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/C_14Ill5-k8';

// COMPONENT DEFINITION
const SaltOfTheEarth = () => (
	<div>
		<TutorialContainer
			title='Salt Of The Earth'
			videoUrl={videoUrl}
		/>
	</div>
);

export default SaltOfTheEarth;