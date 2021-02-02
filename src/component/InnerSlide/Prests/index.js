/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import React from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import styles from './style.module.css';

const Prests = ({ state, setAddPreset }) => (
  <div className={styles.container}>
    {
      (state === 'entered') ? (
        <div className={styles.header}>
          <p className={styles.title}>
            プリセット
          </p>
          <IconContext.Provider value={{ color: 'rgb(116, 187, 150)', className: `${styles.icon}`, size: '3rem' }}>
            <div onClick={() => { setAddPreset((prev) => !prev); }}>
              <BsFillPlusCircleFill />
            </div>
          </IconContext.Provider>
        </div>
      ) : (
        <div />
      )
    }
  </div>
);

export default Prests;
