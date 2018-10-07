// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

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