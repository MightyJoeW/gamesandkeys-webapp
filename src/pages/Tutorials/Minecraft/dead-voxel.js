// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/Xoaor-shCps';

// Component Definition
const DeadVoxel = () => (
  <div>
    <TutorialContainer
      name="Dead Voxel"
      videoUrl={videoUrl}
    />
  </div>
)

export default DeadVoxel;