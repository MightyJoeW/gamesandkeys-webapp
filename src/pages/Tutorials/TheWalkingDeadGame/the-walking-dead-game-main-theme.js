// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/Y5gpXe4WV7k';

// Component Definition
const TheWalkingDead = () => (
  <div>
    <TutorialContainer
      title='The Walking Dead Game - Main Theme'
      videoUrl={videoUrl}
    />
  </div>
)

export default TheWalkingDead;