// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/zfYB0tzjOyk';

// Component Definition
const StraySheep = () => (
  <div>
    <TutorialContainer
      title='Stray Sheep'
      videoUrl={videoUrl} />
  </div>
)

export default StraySheep;