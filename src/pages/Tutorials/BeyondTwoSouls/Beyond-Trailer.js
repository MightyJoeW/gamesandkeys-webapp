// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/Ll8wJKBpZ8o';

// Component Definition
const BeyondTrailer = () => (
  <div>
    <p>E3 Trailer (End Pinao Theme)</p>
    <TutorialContainer videoUrl={videoUrl} />
  </div>
)

export default BeyondTrailer;