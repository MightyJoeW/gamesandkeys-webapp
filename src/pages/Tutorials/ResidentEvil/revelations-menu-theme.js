// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/Shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/S1Hzdm8Uvbc';

// Component Definition
const MenuTheme = () => (
  <div>
    <TutorialContainer
      title='Menu Theme'
      videoUrl={videoUrl}
    />
  </div>
)

export default MenuTheme;