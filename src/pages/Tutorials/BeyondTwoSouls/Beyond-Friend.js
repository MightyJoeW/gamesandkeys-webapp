// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

const videoUrl = 'https://www.youtube.com/embed/Vn7H0lGonDw';

// Component Definition
const BeyondFriend = () => (
  <div>
    <p>My Imaginary Friend</p>
    <TutorialContainer videoUrl={videoUrl} />
  </div>
)

export default BeyondFriend;