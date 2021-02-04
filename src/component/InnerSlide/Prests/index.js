/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
import React from 'react';
import { BsFillPlusCircleFill, BsFillXCircleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons';

import PresetList from './PresetList';
import styles from './style.module.css';

const Prests = ({
  state, setIsPresetPage, isPresetPage, setCurrentPreset, presets,
}) => (
  <div className={styles.container}>
    {
      (state === 'entered') ? (
        <div>
          <div className={styles.header}>
            <p className={styles.title}>
              プリセット
            </p>
            {
              isPresetPage ? (
                <IconContext.Provider value={{ color: 'rgb(116, 187, 150)', className: `${styles.icon}`, size: '3rem' }}>
                  <div onClick={() => { setIsPresetPage((prev) => !prev); }}>
                    <BsFillXCircleFill />
                  </div>
                </IconContext.Provider>
              ) : (
                <IconContext.Provider value={{ color: 'rgb(116, 187, 150)', className: `${styles.icon}`, size: '3rem' }}>
                  <div onClick={() => { setIsPresetPage((prev) => !prev); }}>
                    <BsFillPlusCircleFill />
                  </div>
                </IconContext.Provider>
              )
            }
          </div>
          <div className={styles.prestList}>
            {
              (presets.length !== 0) ? (
                <PresetList presets={presets} setCurrentPreset={setCurrentPreset} />
              ) : (
                <div>APIのスキーマを設定しましょう</div>
              )
            }
          </div>
        </div>
      ) : (
        <div />
      )
    }
  </div>
);

export default Prests;
