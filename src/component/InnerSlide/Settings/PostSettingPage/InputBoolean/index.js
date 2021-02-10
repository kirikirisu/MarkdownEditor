/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styles from './style.module.css';

const InputBoolean = ({
  id, field, fieldName, setPostValues, postValues,
}) => {
  const [check, setCheck] = useState(false);

  const onChange = (e) => {
    const v = e.target.checked;
    setCheck(v);

    const val = {};
    val[fieldName] = v;

    const newVals = { ...postValues, [id]: val };
    setPostValues(newVals);
  };

  return (
    <div className={styles.inputCheckbox}>
      <label className={styles.label}>{fieldName}</label>
      <input
        type="checkbox"
        onChange={(e) => onChange(e)}
        checked={check}
      />
    </div>
  );
};

export default InputBoolean;
