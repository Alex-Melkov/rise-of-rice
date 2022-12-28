import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './RollBlock.module.scss'

const Skeleton: React.FC = () => (
  <ContentLoader
    className={styles.wrapper}
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="293" rx="10" ry="10" width="280" height="23" /> 
    <rect x="0" y="340" rx="10" ry="10" width="280" height="50" /> 
    <rect x="0" y="455" rx="10" ry="10" width="95" height="30" /> 
    <rect x="10" y="0" rx="30" ry="30" width="260" height="260" /> 
    <circle cx="263" cy="466" r="18" /> 
    <rect x="0" y="410" rx="10" ry="10" width="144" height="35" />
  </ContentLoader>
);

export default Skeleton;
