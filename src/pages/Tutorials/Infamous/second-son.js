// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/HsMitMHRHos';

// Component Definition
const Infamous = () => (
  <div>
    <TutorialContainer
      name="Second Son"
      videoUrl={videoUrl}
    />
  </div>
)

export default Infamous;