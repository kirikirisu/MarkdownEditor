import React, { useState } from 'react';
import * as styles from './style.module.css';

import Prests from './Prests';
import Settings from './Settings';

const InnerSlide = ({ state }) => {
  // default false
  const [addPreset, setAddPreset] = useState(true);
  return (
    <div className={styles.container}>
      <Prests state={state} setAddPreset={setAddPreset} />
      <Settings addPreset={addPreset} />
    </div>
  );
};

export default InnerSlide;
