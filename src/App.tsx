import * as React from 'react';
import get from './stories/api';
import Story from './stories/types';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    const resp = getJSON();  
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
  }

function getWrapper(): void {
  getJSON('story.json').then(function(story: Story) {
    return getJSON(story.chapterUrls[0]);
  }).then(function(chapter1) {
    console.log("Got chapter 1!", chapter1);
  })
}

function getJSON(url: string): Promise<string> {
  return get('story.json').then(JSON.parse);
}

export function getJSONx() {
  get('story.json').then(function(response: string) {
    return JSON.parse(response);
  });
}

// tslint:disable:typedef
// tslint:disable:no-console
// function getJSON(): void {
//   get('story.json').then( return JSON.parse(response))
// }

export default App;
