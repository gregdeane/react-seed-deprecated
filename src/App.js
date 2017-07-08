import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from 'components/navigation/Navigation';
import Routes from 'components/routes/Routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Routes />
    </div>
  </Router>
);

export default App;
