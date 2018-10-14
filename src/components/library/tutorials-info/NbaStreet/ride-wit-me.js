// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

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