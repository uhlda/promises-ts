import * as React from 'react';
import getJSON from './stories/api';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  
  render() {

    getWrapper();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div id="stories">
          {}
        </div>
      </div>
    );

    function getWrapper(): void {
      getJSON('story.json')
      // tslint:disable-next-line:typedef
      .then(function(story) {
        return getJSON(story.chapterUrls[0]);
      })
      // tslint:disable-next-line:typedef
      .then(function(chapter1) {
        // tslint:disable:no-console
        console.log('Got chapter 1!', chapter1);
      });
    }
  }
}

export default App;
