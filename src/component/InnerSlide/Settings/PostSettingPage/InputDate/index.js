/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import styles from './style.module.css';

const InputDate = ({
  id, field, fieldName, setPostValues, postValues,
}) => {
  const [date, setDate] = useState('');

  const onChange = (e) => {
    const v = e.target.value;
    setDate(v);

    const val = {};
    val[fieldName] = v;

    const newVals = { ...postValues, [id]: val };
    setPostValues(newVals);
  };

  return (
    <div className={styles.inputDate}>
      <label className={styles.label}>{fieldName}</label>
      <input type="datetime-local" onChange={(e) => onChange(e)} value={date} />
    </div>
  );
};

export default InputDate;
