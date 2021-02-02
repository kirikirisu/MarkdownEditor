import React from 'react';
import * as styles from './style.module.css';

import Prests from './Prests';
import Settings from './Settings';

const InnerSlide = ({ state }) => (
  <div className={styles.container}>
    <Prests state={state} />
    <Settings />
  </div>
);

export default InnerSlide;
