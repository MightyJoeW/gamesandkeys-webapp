// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/kq8qR5kmFtM';

// Component Definition
const TheChoice = () => (
  <div>
    <TutorialContainer
      title='The Choice'
      videoUrl={videoUrl}
    />
  </div>
)

export default TheChoice;