import React, { useState, useEffect } from 'react';

import { updatePostValues } from '../InputText';

const InputDate = ({ setPostValues, fieldName, postValues }) => {
  const [date, setDate] = useState('');

  useEffect(() => {
    updatePostValues(postValues, fieldName, date, setPostValues);
  }, [date]);

  return (
    <input type="datetime-local" onChange={(e) => setDate(e.target.value)} value={date} />
  );
};

export default InputDate;
