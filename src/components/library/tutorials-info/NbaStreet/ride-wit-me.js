// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/ModmUekQRvg';

// COMPONENT DEFINITION
const RideWitMe = () => (
	<TutorialWrapper
		midiRoute="NbaStreet/ride-wit-me.mid"
		sheetRoute="NbaStreet/ride-wit-me.pdf"
		title="Ride Wit Me"
		videoUrl={videoUrl}
	/>
);

export default RideWitMe;