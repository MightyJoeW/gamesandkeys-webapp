// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/-86VZNyIY1s';

// Component Definition
const BeyondChildhood = () => (
  <div>
    <TutorialContainer
      title='Childhood Memories'
      videoUrl={videoUrl}
    />
  </div>
)

export default BeyondChildhood;