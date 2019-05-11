// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/0bNEkJ5JBvc';

// COMPONENT DEFINITION
const OilSpill = () => (
	<TutorialWrapper
		midiRoute="BobsBurgers/oil-spill.mid"
		sheetRoute="BobsBurgers/oil-spill-piano.png"
		sheetRoute2="BobsBurgers/oil-spill-pizz.png"
		sheetRoute2Title="pizz"
		title="Oil Spill"
		videoUrl={videoUrl} />
);

export default OilSpill;