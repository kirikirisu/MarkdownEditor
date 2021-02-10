/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import * as styles from './style.module.css';

import Prests from './Prests';
import Settings from './Settings';

const InnerSlide = ({ state }) => {
  const [isPresetPage, setIsPresetPage] = useState(false);
  const [presets, setPreset] = useState([]);
  const [currentPreset, setCurrentPreset] = useState(0);

  useEffect(() => {
    const pastPrests = JSON.parse(localStorage.getItem('presets'));
    if (pastPrests) {
      setPreset(pastPrests);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Prests
        state={state}
        isPresetPage={isPresetPage}
        setIsPresetPage={setIsPresetPage}
        setCurrentPreset={setCurrentPreset}
        presets={presets}
      />
      <Settings
        state={state}
        isPresetPage={isPresetPage}
        setPreset={setPreset}
        presets={presets}
        currentPreset={currentPreset}
      />
    </div>
  );
};

export default InnerSlide;
