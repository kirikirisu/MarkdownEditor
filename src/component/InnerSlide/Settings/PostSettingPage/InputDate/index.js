import React, { useState, useEffect } from 'react';

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
    <input type="datetime-local" onChange={(e) => onChange(e)} value={date} />
  );
};

export default InputDate;
