import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import StreamCreate from './streams/StreamCreate'
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

const App = () => {
  return (
    <div className={'ui container'}>
      <BrowserRouter>
        <Header/>
        <div>
          <Route path={'/'} exact component={StreamList}/>
          <Route path={'/stream/new'} exact component={StreamCreate}/>
          <Route path={'/stream/edit'} exact component={StreamEdit}/>
          <Route path={'/stream/delete'} exact component={StreamDelete}/>
          <Route path={'/stream/show'} exact component={StreamShow}/>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
