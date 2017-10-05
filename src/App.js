import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardComponent from './CardComponent';

const App = () => (
  <MuiThemeProvider>
    <CardComponent />
  </MuiThemeProvider>
);

export default App;
