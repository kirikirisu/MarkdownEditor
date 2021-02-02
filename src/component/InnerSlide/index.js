import React, { useState } from 'react';
import * as styles from './style.module.css';

import Prests from './Prests';
import Settings from './Settings';

const InnerSlide = ({ state }) => {
  // default false
  const [isPresetPage, setIsPresetPage] = useState(true);
  const [presets, setPreset] = useState([]);

  return (
    <div className={styles.container}>
      <Prests state={state} setIsPresetPage={setIsPresetPage} />
      <Settings isPresetPage={isPresetPage} setPreset={setPreset} />
    </div>
  );
};

export default InnerSlide;
