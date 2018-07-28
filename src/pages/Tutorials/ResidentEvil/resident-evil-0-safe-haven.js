// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/r9p2FxjKy0k';

// Component Definition
const SafeHaven = () => (
  <div>
    <TutorialContainer
      title='Safe Haven'
      videoUrl={videoUrl}
    />
  </div>
)

export default SafeHaven;