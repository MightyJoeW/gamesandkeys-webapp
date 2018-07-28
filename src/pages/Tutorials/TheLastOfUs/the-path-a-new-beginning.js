// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/j6X1QR0xgHY';

// Component Definition
const ThePath = () => (
  <div>
    <TutorialContainer
      title='The Path'
      videoUrl={videoUrl}
    />
  </div>
)

export default ThePath;