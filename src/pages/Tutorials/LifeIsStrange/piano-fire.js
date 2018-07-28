// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/kPzFk_mytr0';

// Component Definition
const PianoFire = () => (
  <div>
    <TutorialContainer
      title='Piano Fire'
      videoUrl={videoUrl}
    />
  </div>
)

export default PianoFire;