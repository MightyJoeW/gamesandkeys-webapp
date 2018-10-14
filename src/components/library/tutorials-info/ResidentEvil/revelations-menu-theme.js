// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/S1Hzdm8Uvbc';

// COMPONENT DEFINITION
const MenuTheme = () => (
	<div>
		<TutorialContainer
			title='Menu Theme'
			videoUrl={videoUrl}
		/>
	</div>
);

export default MenuTheme;