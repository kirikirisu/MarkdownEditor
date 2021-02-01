/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import AceEditor from 'react-ace';
import marked from 'marked';

import './App.css';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-github';

const onChangeEditorText = (md, setHtml, setMd) => {
  setMd(md);
  setHtml(marked(md));
};

const App = () => {
  const [inputMd, setMd] = useState('');
  const [html, setHtml] = useState('');

  const renderPreview = () => <div dangerouslySetInnerHTML={{ __html: html }} />;

  return (
    <div className="container">
      <AceEditor
        mode="java"
        theme="github"
        name="mdEditor"
        width="50%"
        height="100%"
        value={inputMd}
        onChange={(md) => onChangeEditorText(md, setHtml, setMd)}
      />
      <div className="preview">{renderPreview()}</div>
    </div>
  );
};

export default App;
