// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/C_14Ill5-k8';

// Component Definition
const SaltOfTheEarth = () => (
  <div>
    <TutorialContainer
      title='Salt Of The Earth'
      videoUrl={videoUrl}
    />
  </div>
)

export default SaltOfTheEarth;