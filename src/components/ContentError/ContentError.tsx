import React from 'react';

import styles from './ContentError.module.scss';

const ContentError: React.FC = () => {
  return (
    <div className={styles.root}>
      <h2>Произошла ошибка 😕</h2>
      <p>к сожалению, не удалось получить роллы</p>
    </div>
  );
}

export default ContentError;
