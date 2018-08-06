// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/Hr8Xs0AlLdI';

// COMPONENT DEFINITION
const OldFriends = () => (
  <div>
    <TutorialContainer
      title='Old Friends'
      videoUrl={videoUrl}
    />
  </div>
)

export default OldFriends;