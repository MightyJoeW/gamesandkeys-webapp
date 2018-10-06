// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/HsMitMHRHos';

// COMPONENT DEFINITION
const Infamous = () => (
	<div>
		<TutorialContainer
			title='Second Son'
			videoUrl={videoUrl}
		/>
	</div>
);

export default Infamous;