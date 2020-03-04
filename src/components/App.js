import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// App components
import Home from './Home';
import About from './About';
import Header from './Header';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      {/* switch will look only for a matching routes. If it doe snot find a route that matches it fall back to "catch all routes" component NotFound  */}
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
      <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;