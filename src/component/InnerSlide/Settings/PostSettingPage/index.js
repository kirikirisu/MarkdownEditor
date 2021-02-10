/* eslint-disable array-callback-return */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-cycle */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import InputText from './InputText';
import InputDate from './InputDate';
import InputBoolean from './InputBoolean';
import DisplayArticle from './DisplayArticle';
import styles from './style.module.css';

const SwitchInputType = (props) => {
  const {
    field, fieldName,
  } = props;

  const category = field[fieldName];

  switch (category) {
    case 'text':
      return (
        <InputText {...props} />
      );
    case 'date':
      return (
        <InputDate {...props} />
      );
    case 'boolean':
      return (
        <InputBoolean {...props} />
      );
    case 'markdown':
      return (
        <DisplayArticle {...props} />
      );
    default:
      return <div />;
  }
};

const PostSettingPage = ({ presets, currentPreset }) => {
  // const [parsedPosts, setParsedPosts] = useState({});
  const [postValues, setPostValues] = useState({});
  let preset;

  if (presets.length !== 0) {
    const { preset: pre } = presets[currentPreset];
    preset = pre;
  }

  useEffect(() => {
    setPostValues({});
  }, [currentPreset]);

  // TODO フィールドの名前をかぶらないようにする(shemasettingでバリデーション)
  const post = async (e) => {
    e.preventDefault();
    const elements = Object.keys(postValues).map((id) => postValues[id]);
    const posts = {};

    elements.map((el) => {
      const ky = Object.keys(el)[0];
      const vl = el[ky];

      posts[ky] = vl;
    });
    console.log('result', posts);
  };

  console.log('postV', postValues);

  return (
    <div className={styles.container}>
      {
        (presets.length === 0) ? (
          <div>プリセットを追加してください</div>
        ) : (
          <div>
            <div className={styles.inputsContainer}>
              <div className={styles.title}>Postする値を設定</div>
              <div className={styles.inputList}>
                {
                  Object.keys(preset).map((id) => {
                    const field = preset[id];
                    const fieldName = Object.keys(field)[0];

                    return (
                      <div key={id} className={styles.inputs}>
                        <SwitchInputType
                          id={id}
                          field={field}
                          fieldName={fieldName}
                          setPostValues={setPostValues}
                          postValues={postValues}
                        />
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <div className={styles.setUrl}>
              <div className={styles.urlTitle}>URL</div>
              <div className={styles.url}>
                url format
              </div>
            </div>
            <button onClick={(e) => post(e)} className={styles.postButton}>POST</button>
          </div>
        )
      }
    </div>
  );
};

export default PostSettingPage;
