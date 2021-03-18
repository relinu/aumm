import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import { theme as darkTheme } from './+themes/darkTheme';
import { ModsProvider } from './+states/Mods/mods.state';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <ModsProvider>
        <Router>
          <App />
        </Router>
      </ModsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
