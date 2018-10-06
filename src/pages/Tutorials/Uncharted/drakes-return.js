// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/D41L6sv84NM';

// COMPONENT DEFINITION
const DrakesReturn = () => (
	<div>
		<TutorialContainer
			title="Drake's Return"
			videoUrl={videoUrl}
		/>
	</div>
);

export default DrakesReturn;