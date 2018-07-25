// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/-86VZNyIY1s';

// Component Definition
const BeyondChildhood = () => (
  <div>
    <p>Childhood Memories</p>
    <TutorialContainer videoUrl={videoUrl} />
  </div>
)

export default BeyondChildhood;