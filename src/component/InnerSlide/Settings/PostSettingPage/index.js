/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

import InputText from './InputText';
import InputDate from './InputDate';
import InputBoolean from './InputBoolean';
import DisplayArticle from './DisplayArticle';
import styles from './style.module.css';

const SwitchInputType = (props) => {
  const {
    id, field, fieldName, setPostValues, postValues,
  } = props;

  const category = field[fieldName];

  switch (category) {
    case 'text':
      return (
        <InputText {...props} />
      );
    default:
      return <div />;
  }
};

const PostSettingPage = ({ presets, currentPreset }) => {
  const [schema, setSchema] = useState([]);

  const [postValues, setPostValues] = useState({});

  useEffect(() => {
    if (presets.length !== 0) {
      setSchema(presets[currentPreset].preset);
    }
  }, [presets, currentPreset]);

  console.log('postValues', postValues);
  return (
    <div className={styles.container}>
      {
        (Object.keys(schema).length === 0) ? (
          <div>プリセットを追加してください</div>
        ) : (
          <div className={styles.inputsContainer}>
            {
              Object.keys(schema).map((id) => {
                const field = schema[id];
                const fieldName = Object.keys(field)[0];

                console.log('fieldName', fieldName);
                return (
                  <div key={id} className={styles.input}>
                    <label className={styles.inputLabel}>{fieldName}</label>
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
        )
      }
    </div>
  );
};

export default PostSettingPage;
