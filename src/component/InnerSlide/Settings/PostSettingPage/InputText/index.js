/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

const InputText = ({
  id, field, fieldName, setPostValues, postValues,
}) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    const t = e.target.value;
    setText(t);

    const val = {};
    val[fieldName] = t;

    const newVals = { ...postValues, [id]: val };
    setPostValues(newVals);
  };

  return (
    <div className={styles.inputText}>
      <label className={styles.label}>{fieldName}</label>
      <input type="text" onChange={(e) => onChange(e)} value={text} />
    </div>
  );
};

export default InputText;
