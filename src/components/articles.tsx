import React, { FC } from 'react';
import FeaturedResearch from './featured-research';
import News from './news';

export const Articles: FC = () => {
  return (
    <>
      <News />
      <FeaturedResearch />
    </>
  );
};
