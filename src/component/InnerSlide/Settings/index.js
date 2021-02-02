import React from 'react';

import PostSettingPage from './PostSettingPage';
import styles from './style.module.css';
import SchemaSettingPage from './SchemaSettingPage';

const Settings = ({ addPreset }) => (
  <div className={styles.container}>
    {
      addPreset ? (
        <SchemaSettingPage />
      ) : (
        <PostSettingPage />
      )
    }
  </div>
);

export default Settings;
