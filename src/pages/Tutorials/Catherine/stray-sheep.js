// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/zfYB0tzjOyk';

// Component Definition
const StraySheep = () => (
  <div>
    <TutorialContainer
      name="Stray Sheep"
      videoUrl={videoUrl} />
  </div>
)

export default StraySheep;