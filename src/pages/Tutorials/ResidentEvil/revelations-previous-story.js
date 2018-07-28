// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/ivzd0KwpOMU';

// Component Definition
const PreviousStory = () => (
  <div>
    <TutorialContainer
      title='Previous Story'
      videoUrl={videoUrl}
    />
  </div>
)

export default PreviousStory;