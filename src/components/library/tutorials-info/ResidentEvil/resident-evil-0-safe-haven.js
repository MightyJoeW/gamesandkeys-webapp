// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/r9p2FxjKy0k';

// COMPONENT DEFINITION
const SafeHaven = () => (
	<TutorialWrapper
		midiRoute="ResidentEvil/safe-haven.mid"
		sheetRoute="ResidentEvil/safe-haven-piano.png"
		sheetRoute2="ResidentEvil/safe-haven-harp.png"
		sheetRoute2Title="harp"
		title="Safe Haven"
		videoUrl={videoUrl}
	/>
);

export default SafeHaven;