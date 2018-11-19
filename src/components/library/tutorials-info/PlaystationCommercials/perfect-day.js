// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/xF0gICE1Vcg';

// COMPONENT DEFINITION
const PerfectDay = () => (
	<TutorialWrapper
		midiRoute="PlaystationCommercials/perfect-day.mid"
		sheetRoute="PlaystationCommercials/perfect-day.png"
		title="Perfect Day"
		videoUrl={videoUrl}
	/>
);

export default PerfectDay;