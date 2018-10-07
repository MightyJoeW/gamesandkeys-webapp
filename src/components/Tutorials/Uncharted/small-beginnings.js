// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

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