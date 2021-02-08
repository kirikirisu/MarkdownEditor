/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import * as styles from './style.module.css';

import Prests from './Prests';
import Settings from './Settings';

const InnerSlide = ({ state, toggleSlide }) => {
  // default false
  const [isPresetPage, setIsPresetPage] = useState(true);
  const [presets, setPreset] = useState([]);
  const [currentPreset, setCurrentPreset] = useState('');
  console.log('aniSta', state);

  useEffect(() => {
    const pastPrests = JSON.parse(localStorage.getItem('presets'));
    // console.log('pastPresets', pastPrests);
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
