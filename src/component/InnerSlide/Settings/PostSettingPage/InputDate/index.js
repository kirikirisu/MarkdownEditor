import React, { useState, useEffect } from 'react';

const InputDate = ({ setPostValues, fieldName, postValues }) => {
  const [date, setDate] = useState('');

  useEffect(() => {
  }, [date]);

  return (
    <input type="datetime-local" onChange={(e) => setDate(e.target.value)} value={date} />
  );
};

export default InputDate;
