// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/VzKSLGtN09I';

// Component Definition
const Brothers = () => (
  <div>
    <TutorialContainer
      name="Brothers"
      videoUrl={videoUrl}
    />
  </div>
)

export default Brothers;