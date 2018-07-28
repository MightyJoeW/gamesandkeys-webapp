// External Dependencies
import React from 'react';

// Internal Dependencies
import TutorialContainer from '../../../components/shared/Tutorials/TutorialContainer';

// Local Variables
const videoUrl = 'https://www.youtube.com/embed/LJvCmaAHKcE';

// Component Definition
const PokemonLeague = () => (
  <div>
    <TutorialContainer
      title='Pokemon League'
      videoUrl={videoUrl}
    />
  </div>
)

export default PokemonLeague;