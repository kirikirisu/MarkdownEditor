/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styles from './style.module.css';

const PostSettingButton = ({ toggle, isOpen }) => (
  <div>
    <div className={styles.button} onClick={() => toggle()}>
      <p className={styles.buttonText}>
        {
          isOpen ? (
            'CLOSE'
          ) : (
            'POST SETTING'
          )
        }
      </p>
    </div>
  </div>
);

export default PostSettingButton;
