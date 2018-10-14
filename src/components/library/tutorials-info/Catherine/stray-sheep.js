// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/zfYB0tzjOyk';

// COMPONENT DEFINITION
const StraySheep = () => (
	<div>
		<TutorialContainer
			title='Stray Sheep'
			videoUrl={videoUrl} />
	</div>
);

export default StraySheep;