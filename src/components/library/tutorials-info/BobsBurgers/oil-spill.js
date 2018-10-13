// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/0bNEkJ5JBvc';

// COMPONENT DEFINITION
const OilSpill = () => (
	<div>
		<TutorialContainer
			title='Oil Spill'
			videoUrl={videoUrl} />
	</div>
);

export default OilSpill;