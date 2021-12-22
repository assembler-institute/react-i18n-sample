import "./styles.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./routing/PrivateRoute";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}
