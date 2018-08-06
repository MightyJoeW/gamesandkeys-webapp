// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Vn7H0lGonDw';

// COMPONENT DEFINITION
const BeyondFriend = () => (
  <div>
    <TutorialContainer
      title='My Imaginary Friend'
      videoUrl={videoUrl}
    />
  </div>
)

export default BeyondFriend;