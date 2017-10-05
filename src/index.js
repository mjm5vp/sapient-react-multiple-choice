import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles/index.css';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './other/registerServiceWorker';

var name = ''

var handleName = (nameInput) => {
  name = nameInput
}

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        {/* <Route path='/' component={Welcome} nameEntered={handleName} /> */}
        <Route path='/assessment' component={App} name={name} />
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
