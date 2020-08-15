// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialWrapper from '../../../shared/tutorial/tutorial-wrapper';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Xoaor-shCps';

// COMPONENT DEFINITION
const DeadVoxel = () => (
	<TutorialWrapper
		midiRoute="Minecraft/dead-voxel.mid"
		sheetRoute="Minecraft/dead-voxel.pdf"
		title="Dead Voxel"
		videoUrl={videoUrl}
	/>
);

export default DeadVoxel;