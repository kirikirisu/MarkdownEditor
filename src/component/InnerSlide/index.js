/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import * as styles from './style.module.css';

import Prests from './Prests';
import Settings from './Settings';

const InnerSlide = ({ state, toggleSlide }) => {
  const [isPresetPage, setIsPresetPage] = useState(true);
  const [presets, setPreset] = useState([]);
  const [currentPreset, setCurrentPreset] = useState('');

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
        toggleSlide={toggleSlide}
        setIsPresetPage={setIsPresetPage}
      />
    </div>
  );
};

export default InnerSlide;
