// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/S1Hzdm8Uvbc';

// COMPONENT DEFINITION
const MenuTheme = () => (
	<TutorialWrapper
		midiRoute="ResidentEvil/menu-theme.mid"
		sheetRoute="ResidentEvil/menu-theme.png"
		title="Menu Theme"
		videoUrl={videoUrl}
	/>
);

export default MenuTheme;