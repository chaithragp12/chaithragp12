import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RequestCertificateForm from './components/RequestCertificateForm';
import RequestsList from './components/RequestsList';
import ViewCertificateRequest from './components/ViewCertificateRequest';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/" exact component={RequestCertificateForm} />
        <Route path="/requests" component={RequestsList} />
        <Route
          path="/view-request/:referenceNo"
          render={(props) => <ViewCertificateRequest {...props} />}
        />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
