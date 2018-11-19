// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/xDAtuAotJuo';

// COMPONENT DEFINITION
const GrandTheftAuto = () => (
	<TutorialWrapper
		midiRoute="GrandTheftAuto/gtav-trailer-theme.mid"
		sheetRoute="GrandTheftAuto/gtav-trailer-theme.png"
		title="Trailer Theme (Ogdens Nut Gone Flake)"
		videoUrl={videoUrl} />
);

export default GrandTheftAuto;