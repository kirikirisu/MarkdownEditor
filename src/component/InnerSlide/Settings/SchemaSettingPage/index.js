/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import CurrentField from './CurrentField';
import PastField from './PastField';
import styles from './style.module.css';

const SchemaSettingPage = ({ setPreset }) => {
  const [schema, setSchema] = useState({});
  const [crFieldName, setCrFieldName] = useState('');
  const [crFieldCategory, setCrFieldCategory] = useState('text');

  const [presetTitle, setPresetTitle] = useState('');

  const onClickAdd = () => {
    if (crFieldName !== '') {
      const id = Date.now();
      const field = {};
      field[crFieldName] = crFieldCategory;
      const newSchema = { ...schema, [id]: field };

      setSchema(newSchema);

      setCrFieldName('');
      setCrFieldCategory('text');
    } else {
      alert('入力してください');
    }
  };

  const onClickDone = () => {
    if (crFieldName !== '' && presetTitle !== '') {
      // 最後の入力はaddボタンは押されない
      const id = Date.now();
      const lastField = {};
      lastField[crFieldName] = crFieldCategory;
      const newSchema = { ...schema, [id]: lastField };

      const preset = { title: presetTitle, preset: newSchema };
      setPreset((prev) => {
        const newPrests = [...prev, preset];

        localStorage.setItem('presets', JSON.stringify(newPrests));
        return newPrests;
      });

      // clear input
      setSchema({});
      setCrFieldName('');
      setCrFieldCategory('text');
      setPresetTitle('');
    } else {
      alert('入力してください');
    }
  };

  // console.log('schemaS', schema);

  return (
    <div className={styles.container}>
      <div className={styles.title}>APIスキーマを定義</div>
      <div className={styles.inputPresetContaienr}>
        <div className={styles.presetTitleLabel}>プリセットタイトル</div>
        <input type="text" value={presetTitle} onChange={(e) => setPresetTitle(e.target.value)} />
      </div>
      <div className={styles.listArea}>
        <div>
          {(Object.keys(schema).length !== 0) ? (
            <div>
              <div>
                {Object.keys(schema).map((key) => (
                  <PastField key={key} id={key} schema={schema} setSchema={setSchema} />
                ))}
              </div>
              <CurrentField setN={setCrFieldName} setC={setCrFieldCategory} n={crFieldName} c={crFieldCategory} />
            </div>
          ) : (
            <CurrentField setN={setCrFieldName} setC={setCrFieldCategory} n={crFieldName} c={crFieldCategory} />
          )}
        </div>
        <button className={styles.addButton} onClick={() => onClickAdd()}>追加</button>
      </div>
      <button className={styles.doneButton} onClick={() => onClickDone()}>完了</button>
    </div>
  );
};

export default SchemaSettingPage;
