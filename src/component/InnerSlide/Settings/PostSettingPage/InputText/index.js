/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';

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
    <input type="text" onChange={(e) => onChange(e)} value={text} />
  );
};

export default InputText;
