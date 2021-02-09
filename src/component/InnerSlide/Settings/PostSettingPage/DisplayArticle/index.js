/* eslint-disable import/no-cycle */
import React from 'react';
import { BodyContext } from '../../../../../App';

const DisplayArticle = () => (
  <div>
    <BodyContext.Consumer>
      {(body) => (
        <div>
          {body ? (
            <div>{body}</div>
          ) : (
            <div>記事が入力されていません</div>
          )}
        </div>
      )}
    </BodyContext.Consumer>
  </div>
);

export default DisplayArticle;
