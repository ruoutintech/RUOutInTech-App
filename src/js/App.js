import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import RUOutInTechRoutes from './ruoutintech-routes';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { RUOutInTechTheme } from '../ruoutintech-theme';

const RUOutinTechTheme = createMuiTheme( RUOutInTechTheme )

function App() {
  return (
    <Router>
      <ThemeProvider theme={RUOutinTechTheme}>
        <RUOutInTechRoutes />
      </ThemeProvider>
    </Router>
  );
}

export default App;