import React from 'react';

import HeroSection from './HeroSection';
import IntroSection from './IntroSection';
import FeaturedProjects from './FeaturedProjects';
import SkillsPreview from './SkillsPreview';

const HomePage = () => {
  return (
    <div className="homepage">
      <HeroSection />
       <IntroSection />
      <FeaturedProjects />
      <SkillsPreview />
    </div>
  );
};

export default HomePage;