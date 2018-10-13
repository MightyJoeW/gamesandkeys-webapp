// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/xF0gICE1Vcg';

// COMPONENT DEFINITION
const PerfectDay = () => (
	<div>
		<TutorialContainer
			title='Perfect Day'
			videoUrl={videoUrl}
		/>
	</div>
);

export default PerfectDay;