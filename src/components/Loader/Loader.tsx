import React from 'react';

import styles from './Loader.module.scss';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader} >
        <img src="img/loading.png" alt="loading" />
    </div>
  );
}

export default Loader;
