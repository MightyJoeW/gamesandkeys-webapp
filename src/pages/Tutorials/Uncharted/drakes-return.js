// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/D41L6sv84NM';

// Component Definition
const DrakesReturn = () => (
  <div>
    <TutorialContainer
      title="Drake's Return"
      videoUrl={videoUrl}
    />
  </div>
)

export default DrakesReturn;