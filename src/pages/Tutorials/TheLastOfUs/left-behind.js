// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/Zmp64q2Rk9o';

// Component Definition
const LeftBehind = () => (
  <div>
    <TutorialContainer
      title='Left Behind'
      videoUrl={videoUrl}
    />
  </div>
)

export default LeftBehind;