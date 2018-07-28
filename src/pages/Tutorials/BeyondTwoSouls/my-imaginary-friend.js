// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/Vn7H0lGonDw';

// Component Definition
const BeyondFriend = () => (
  <div>
    <TutorialContainer
      title='My Imaginary Friend'
      videoUrl={videoUrl}
    />
  </div>
)

export default BeyondFriend;