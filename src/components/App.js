import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';

const PageOne = () => {
  return <div>
    <h2>Page One</h2>
    <Link to={'/pagetwo'}>
      <button>Take me to Page Two</button>
    </Link>
  </div>
};


const PageTwo = () => {
  return (
    <div>
      <h2>Page Two</h2>
      <Link to={'/'}>
        <button>Take me back</button>
      </Link>
    </div>
  )
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path={'/'} exact component={PageOne}/>
          <Route path={'/pagetwo'} component={PageTwo}/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
