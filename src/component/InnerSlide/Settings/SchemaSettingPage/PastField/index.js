import React from 'react';
import fieldStyles from '../CurrentField/style.module.css';

const PastField = ({ id, schema, setSchema }) => {
  const name = Object.keys(schema[id])[0];
  const category = schema[id][name];
  const field = {};
  const newSchema = { ...schema };

  const onChangeName = (e) => {
    const nm = e.target.value;
    field[nm] = category;
    newSchema[id] = field;
    setSchema(newSchema);
  };

  const onChanegeCategory = (e) => {
    field[name] = e.target.value;
    newSchema[id] = field;
    setSchema(newSchema);
  };

  return (
    <div className={fieldStyles.container}>
      <div className={fieldStyles.fieldName}>
        <div className={fieldStyles.labels}>フィールド名</div>
        <input type="text" value={name} onChange={(e) => onChangeName(e)} />
      </div>
      <div>
        <div className={fieldStyles.labels}>種類</div>
        <div className={fieldStyles.selectbox}>
          <select name="category" value={category} onChange={(e) => onChanegeCategory(e)}>
            <option value="text">テキスト</option>
            <option value="date">日時</option>
            <option value="boolean">真偽値</option>
            <option value="markdown">マークダウン</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PastField;
