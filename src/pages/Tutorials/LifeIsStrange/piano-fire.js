// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/kPzFk_mytr0';

// Component Definition
const PianoFire = () => (
  <div>
    <TutorialContainer
      name="Piano Fire"
      videoUrl={videoUrl}
    />
  </div>
)

export default PianoFire;