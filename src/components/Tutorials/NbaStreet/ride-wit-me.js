// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/ModmUekQRvg';

// COMPONENT DEFINITION
const RideWitMe = () => (
	<div>
		<TutorialContainer
			title='Ride Wit Me'
			videoUrl={videoUrl}
		/>
	</div>
);

export default RideWitMe;