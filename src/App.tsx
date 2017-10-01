import * as React from 'react';
import { getHeading, getChapter, getChapters } from './stories/api';
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
        <div className="story" id="story">
          Story
        </div>
      </div>
    );

    function getWrapper(): void {
      getHeading();
      getChapter(1);
      getChapters();
    }

    // function getWrapper(): void {
    //   getJSON('story.json')
    //   .then(function(story: Story) {
    //     addHtmlToPage(story.heading);
    //     return getJSON(story.chapterUrls[0]);
    //   })
    //   .then(function(chapter1: Chapter) {
    //     addHtmlToPage(chapter1.html);
    //   })
    //   .catch(function(err: string) {
    //     Error(err);
    //     addTextToPage(err);
    //   });
    // }
  }
}

export default App;
