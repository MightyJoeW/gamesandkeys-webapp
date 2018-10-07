// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/spDdgUqgxBo';

// COMPONENT DEFINITION
const WhereAreYou = () => (
	<div>
		<TutorialContainer
			title='Where Are You'
			videoUrl={videoUrl}
		/>
	</div>
);

export default WhereAreYou;