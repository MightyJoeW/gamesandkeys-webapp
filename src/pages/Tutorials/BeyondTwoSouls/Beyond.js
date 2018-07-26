// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/B_jnltymaTg';

// Component Definition
const Beyond = () => (
  <div>
    <TutorialContainer
      name="Beyond Two Souls: Main Theme"
      videoUrl={videoUrl}
    />
  </div>
)

export default Beyond;