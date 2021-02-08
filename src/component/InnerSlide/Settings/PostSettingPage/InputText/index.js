/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
import React, { useEffect } from 'react';

const InputText = ({
  id, field, fieldName, setPostValues, postValues,
}) => {
  const onChange = (e) => {
    const newVals = { ...postValues };
    const val = {};
    val[fieldName] = e.target.value;

    newVals[id] = val;
    setPostValues(newVals);
  };

  useEffect(() => {
    const newValues = { ...postValues };
    const value = {};
    value[fieldName] = '';

    newValues[id] = value;
    setPostValues(newValues);
  }, []);

  const v = Object.keys(postValues);
  return (
    <div>
      {
        (v.length !== 0) ? (
          <input type="text" onChange={(e) => onChange(e)} value={postValues[id][fieldName]} />
        ) : (
          <div />
        )
      }
    </div>
  );
};

export default InputText;
