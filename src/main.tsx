import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import cssHasPseudo from 'css-has-pseudo/browser';

import '@fontsource-variable/inter';
import '@fontsource/arimo/latin-400.css';
import '@fontsource/arimo/latin-400-italic.css';
import '@fontsource/arimo/latin-700.css';
import '@fontsource/cousine/latin-400.css';
import '@fontsource/cousine/latin-700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

cssHasPseudo(document);