/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import CurrentField from './FieldSetting';

const PastField = ({
  v, i, updateHistory, setUpdateHistory,
}) => {
  const key = Object.keys(v)[0];
  const [fieldName, setFieldName] = useState(key);
  const [category, setCategory] = useState(v[key]);
  const updateField = {};
  updateField[fieldName] = category;

  useEffect(() => {
    stackUpdate(i, updateField, updateHistory, setUpdateHistory);
  }, [fieldName, category]);

  return (
    <div>
      <label>フィールド名</label>
      <input type="text" value={fieldName} onChange={(e) => setFieldName(e.target.value)} />
      <label>種類</label>
      <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="text">テキスト</option>
        <option value="date">日時</option>
        <option value="boolean">真偽値</option>
      </select>
    </div>
  );
};

const existSameIndexUpdate = (updateIndex, updates) => {
  let exist = [];
  updates.map((e) => {
    if (e[0] === updateIndex) {
      exist = e;
    }
  });

  if (exist.length === 0) {
    return false;
  }
  return true;
};

const stackUpdate = (updateIndex, updateField, updateHistory, setUpdateHistory) => {
  const updateInfor = [updateIndex, updateField];
  const newUpdateHistory = [...updateHistory];

  if (existSameIndexUpdate(updateIndex, updateHistory)) {
    for (let i = 0; i < updateHistory.length; i++) {
      if (updateIndex === updateHistory[i][0]) {
        newUpdateHistory[i] = updateInfor;
        console.log('update1');
        setUpdateHistory(newUpdateHistory);
      }
    }
  } else {
    console.log('update2');
    newUpdateHistory.push(updateInfor);
    setUpdateHistory(newUpdateHistory);
  }
};

const SchemaSettingPage = () => {
  const [schema, setField] = useState([]);
  const [fieldName, setFieldName] = useState('');
  const [category, setCategory] = useState('text');

  // updateHistory = [[number, obj]]
  const [updateHistory, setUpdateHistory] = useState([]);

  const onClick = () => {
    const field = {};
    const newSchema = [...schema];

    field[fieldName] = category;
    newSchema.push(field);

    setField(newSchema);
    setFieldName('');
    setCategory('text');
  };
  console.log('history', updateHistory);
  console.log('schema', schema);

  return (
    <div>
      <div>
        {(schema.length !== 0) ? (
          <div>
            <div>
              {schema.map((value, i) => {
                const key = Object.keys(value)[0];
                return (
                  <PastField key={key} v={value} i={i} updateHistory={updateHistory} setUpdateHistory={setUpdateHistory} />
                );
              })}
            </div>
            <CurrentField fieldName={fieldName} category={category} sfn={setFieldName} sc={setCategory} />
          </div>
        ) : (
          <CurrentField fieldName={fieldName} category={category} sfn={setFieldName} sc={setCategory} />
        )}
      </div>
      <button onClick={() => onClick()}>add</button>
    </div>
  );
};

export default SchemaSettingPage;
