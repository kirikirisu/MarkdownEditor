import React, { useState } from 'react';

import PostSettingPage from './PostSettingPage';
import styles from './style.module.css';
import SchemaSettingPage from './SchemaSettingPage';

const Settings = ({
  state, isPresetPage, setPreset, presets, currentPreset,
}) => (
  <div className={styles.container}>
    {
      (state === 'entered') ? (
        <div>
          {
            isPresetPage ? (
              <SchemaSettingPage setPreset={setPreset} />
            ) : (
              <PostSettingPage presets={presets} currentPreset={currentPreset} />
            )
          }
        </div>
      ) : (
        <div />
      )
    }
  </div>
);

export default Settings;
