// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/VCKXbo42CZ8';

// COMPONENT DEFINITION
const SmallBeginnings = () => (
	<div>
		<TutorialContainer
			title='Small Beginnings'
			videoUrl={videoUrl}
		/>
	</div>
);

export default SmallBeginnings;