import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout';
import ProjectManagement from './components/projectManagement/ProjectManagement';
//Installing Redux 
import { createStore } from 'redux';
import { Provider } from 'react-redux';


//***Note: this will not work yet, because we don't have a reducer */
let store = createStore(* placeHolderForReducer *, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/projectmanagement" component={ProjectManagement} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
