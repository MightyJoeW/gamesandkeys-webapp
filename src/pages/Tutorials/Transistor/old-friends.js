// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/Hr8Xs0AlLdI';

// Component Definition
const OldFriends = () => (
  <div>
    <TutorialContainer
      title='Old Friends'
      videoUrl={videoUrl}
    />
  </div>
)

export default OldFriends;