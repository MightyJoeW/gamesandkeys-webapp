// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/sb2ZC5WjjrA';

// COMPONENT DEFINITION
const TheLastOfUsTheme = () => (
	<div>
		<TutorialContainer
			title="The Last of Us"
			videoUrl={videoUrl}
		/>
	</div>
);

export default TheLastOfUsTheme;