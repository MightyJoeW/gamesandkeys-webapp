// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Zmp64q2Rk9o';

// COMPONENT DEFINITION
const LeftBehind = () => (
	<div>
		<TutorialContainer
			title='Left Behind'
			videoUrl={videoUrl}
		/>
	</div>
);

export default LeftBehind;