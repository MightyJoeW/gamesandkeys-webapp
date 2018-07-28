// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/0BZdZeumGJo';

// Component Definition
const Fleeting = () => (
  <div>
    <TutorialContainer
      title='Fleeting'
      videoUrl={videoUrl}
    />
  </div>
)

export default Fleeting;