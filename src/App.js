/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import React, { useState, createContext } from 'react';
import AceEditor from 'react-ace';
import marked from 'marked';

import PostSettingButton from './component/PostSettingButton';
import SettingSlide from './component/SettingSlide';
import styles from './App.module.css';

import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/keybinding-vim';

const onChangeEditorText = (md, setHtml, setMd) => {
  setMd(md);
  setHtml(marked(md));
};

export const BodyContext = createContext();

const App = () => {
  const [inputMd, setMd] = useState('');
  const [html, setHtml] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const renderPreview = () => <div dangerouslySetInnerHTML={{ __html: html }} />;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <AceEditor
          mode="markdown"
          theme="solarized_dark"
          name="mdEditor"
          width="50%"
          height="100%"
          value={inputMd}
          onChange={(md) => onChangeEditorText(md, setHtml, setMd)}
          fontSize={18}
          setOptions={{
            enableBasicAutocompletion: true,
          }}
          keyboardHandler="vim"
        />
        <div className={styles.preview}>{renderPreview()}</div>
      </div>
      <BodyContext.Provider value={html}>
        <SettingSlide show={isOpen} />
      </BodyContext.Provider>
      <PostSettingButton toggle={toggle} isOpen={isOpen} />
    </div>
  );
};

export default App;
