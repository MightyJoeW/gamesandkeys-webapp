// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/DCiy7CiR8UU';

// Component Definition
const Home = () => (
  <div>
    <TutorialContainer
      title='Home'
      videoUrl={videoUrl}
    />
  </div>
)

export default Home;