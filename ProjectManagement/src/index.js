import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import ProjectManagement from "./components/projectManagement/ProjectManagement";

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/projectmanagement" component={ProjectManagement} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
