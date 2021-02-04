/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

import InputText from './InputText';
import InputDate from './InputDate';
import InputBoolean from './InputBoolean';
import DisplayArticle from './DisplayArticle';
import styles from './style.module.css';

const SwitchInputType = ({
  fieldName, field, setPostValues, postValues,
}) => {
  const inputType = field[fieldName];

  switch (inputType) {
    case 'text':
      return (
        <InputText setPostValues={setPostValues} fieldName={fieldName} postValues={postValues} />
      );
    case 'markdown':
      return (
        <div>into edited articl</div>
      );
    case 'date':
      return (
        <InputDate setPostValues={setPostValues} fieldName={fieldName} postValues={postValues} />
      );
    case 'boolean':
      return (
        <InputBoolean setPostValues={setPostValues} fieldName={fieldName} postValues={postValues} />
      );
    default:
  }
};

const PostSettingPage = ({ presets, currentPreset }) => {
  const [schema, setSchema] = useState([]);

  const [postValues, setPostValues] = useState([]);
  // console.log('postPres', presets);
  // console.log('postCurPre', currentPreset);
  console.log('postSchema', schema);
  console.log('postValues', postValues);

  useEffect(() => {
    if (presets.length !== 0) {
      setSchema(presets[currentPreset].presetSchema);
    }
  }, [presets, currentPreset]);

  return (
    <div className={styles.container}>
      {
        (schema.length === 0) ? (
          <div>プリセットを追加してください</div>
        ) : (
          <div className={styles.inputsContainer}>
            {
              schema.map((field) => {
                const fieldName = Object.keys(field)[0];

                return (
                  <div key={fieldName} className={styles.input}>
                    <label className={styles.inputLabel}>{fieldName}</label>
                    <SwitchInputType
                      key={fieldName}
                      fieldName={fieldName}
                      field={field}
                      setPostValues={setPostValues}
                      postValues={postValues}
                    />
                  </div>
                );
              })
            }
          </div>
        )
      }
    </div>
  );
};

export default PostSettingPage;
