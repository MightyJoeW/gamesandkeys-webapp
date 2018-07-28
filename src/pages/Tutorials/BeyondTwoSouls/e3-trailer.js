// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/Ll8wJKBpZ8o';

// Component Definition
const BeyondTrailer = () => (
  <div>
    <TutorialContainer
      title='E3 Trailer (End Pinao Theme)'
      videoUrl={videoUrl}
    />
  </div>
)

export default BeyondTrailer;