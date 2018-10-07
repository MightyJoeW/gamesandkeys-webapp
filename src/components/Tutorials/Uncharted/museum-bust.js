// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/juBlhF_kp4A';

// COMPONENT DEFINITION
const MuseumBust = () => (
	<div>
		<TutorialContainer
			title='Museum Bust'
			videoUrl={videoUrl}
		/>
	</div>
);

export default MuseumBust;