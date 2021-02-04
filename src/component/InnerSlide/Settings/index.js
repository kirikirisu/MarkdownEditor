import React, { useState } from 'react';

import PostSettingPage from './PostSettingPage';
import styles from './style.module.css';
import SchemaSettingPage from './SchemaSettingPage';

const Settings = ({
  isPresetPage, setPreset, presets, currentPreset,
}) => (
  <div className={styles.container}>
    {
      isPresetPage ? (
        <SchemaSettingPage setPreset={setPreset} />
      ) : (
        <PostSettingPage presets={presets} currentPreset={currentPreset} />
      )
    }
  </div>
);

export default Settings;
