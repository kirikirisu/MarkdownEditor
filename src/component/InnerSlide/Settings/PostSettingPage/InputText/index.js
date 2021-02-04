/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';

const existSameField = (postValues, fieldName) => {
  let exist;

  postValues.map((v) => {
    const key = Object.keys(v)[0];

    if (key === fieldName) {
      exist = key;
    }
  });

  if (exist) {
    return true;
  }
  return false;
};

// 複数のインプットがある場合の状態管理
// この関数を使うより綺麗にかけるかも
// https://ja.reactjs.org/docs/forms.html#handling-multiple-inputs
export const updatePostValues = (postValues, fieldName, fieldValue, setPostValues) => {
  const newPostValues = [...postValues];
  const field = {};
  field[fieldName] = fieldValue;

  if (existSameField(postValues, fieldName)) {
    for (let i = 0; i < postValues.length; i++) {
      const key = Object.keys(postValues[i])[0];

      if (key === fieldName) {
        newPostValues[i] = field;
        setPostValues(newPostValues);
      }
    }
  } else {
    newPostValues.push(field);
    setPostValues(newPostValues);
  }
};

const InputText = ({ setPostValues, fieldName, postValues }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    updatePostValues(postValues, fieldName, text, setPostValues);
  }, [text]);

  return (
    <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
  );
};

export default InputText;
