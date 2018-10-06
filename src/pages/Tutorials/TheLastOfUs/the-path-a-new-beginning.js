// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/j6X1QR0xgHY';

// COMPONENT DEFINITION
const ThePath = () => (
	<div>
		<TutorialContainer
			title='The Path'
			videoUrl={videoUrl}
		/>
	</div>
);

export default ThePath;