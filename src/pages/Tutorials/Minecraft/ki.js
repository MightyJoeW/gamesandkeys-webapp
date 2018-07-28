// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/T92IROWXd4w';

// Component Definition
const Ki = () => (
  <div>
    <TutorialContainer
      title='Ki'
      videoUrl={videoUrl}
    />
  </div>
)

export default Ki;