import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import './App.css';

const PageOne = () => {
  return <div>
    <h2>Page One</h2>
    <NavLink to={'/pagetwo'}>
      <button>Take me to Page Two</button>
    </NavLink>
  </div>
};


const PageTwo = () => {
  return (
    <div>
      <NavLink to={'/'}>
        <button>Take me back</button>
      </NavLink>
    </div>
  )
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path={'/'} component={PageOne}/>
          <Route path={'/pagetwo'} component={PageTwo}/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
