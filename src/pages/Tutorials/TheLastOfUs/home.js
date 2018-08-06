// EXTERNAL DEPENDENCIES
import React from 'react';

// INTERNAL DEPENDENCIES
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// LOCAL VARIABLES
const videoUrl = 'https://www.youtube.com/embed/DCiy7CiR8UU';

// COMPONENT DEFINITION
const Home = () => (
  <div>
    <TutorialContainer
      title='Home'
      videoUrl={videoUrl}
    />
  </div>
)

export default Home;