/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { BodyContext } from '../../../../../App';

import styles from './style.module.css';

const Article = ({
  body, id, field, fieldName, setPostValues, postValues,
}) => {
  useEffect(() => {
    const val = {};
    val[fieldName] = body;

    const newVals = { ...postValues, [id]: val };
    setPostValues(newVals);
  }, []);

  return (
    <div className={styles.article}>{body}</div>
  );
};

const BodyEmpty = ({
  id, field, fieldName, setPostValues, postValues,
}) => {
  useEffect(() => {
    const val = {};
    val[fieldName] = '';

    const newVals = { ...postValues, [id]: val };
    setPostValues(newVals);
  }, []);

  return (
    <div className={styles.article}>Not Exsist Artices</div>
  );
};

const DisplayArticle = (props) => (
  <div className={styles.container}>
    <div className={styles.label}>{props.fieldName}</div>
    <BodyContext.Consumer>
      {(body) => (
        <div>
          {body ? (
            <Article body={body} {...props} />
          ) : (
            <BodyEmpty {...props} />
          )}
        </div>
      )}
    </BodyContext.Consumer>
  </div>
);

export default DisplayArticle;
