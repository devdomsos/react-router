import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// App components
import Home from './Home';
import About from './About';
import Header from './Header';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter basename="/course-directory">
    <div className="container">
      <Header />
      {/* switch will look only for a matching routes. If it doe snot find a route that matches it fall back to "catch all routes" component NotFound  */}
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/teachers" component={Teachers} />
      <Route path="/teachers/:topic/:name" component={Featured} />
      <Route path="/courses" component={Courses} />
      <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
