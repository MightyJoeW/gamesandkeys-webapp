// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../shared/tutorial/tutorial-container';

const videoUrl = 'https://www.youtube.com/embed/nwcKv152tfs';

// COMPONENT DEFINITION
const VanishingGraceInnocence = () => (
	<div>
		<TutorialContainer
			title="Vanishing Grace (Innocence)"
			videoUrl={videoUrl}
		/>
	</div>
);

export default VanishingGraceInnocence;