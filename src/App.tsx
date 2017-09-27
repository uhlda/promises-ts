import * as React from 'react';
import get from './stories/api';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    callStory();  
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

const callStory = () => {

  // tslint:disable-next-line:typedef
  get('story.json').then(function(response) {
    // tslint:disable:no-console
    console.log('Success!', response);
    // tslint:disable:align
    // tslint:disable-next-line:typedef
  }, function(error) { 
    console.error('Failed!', error); 
  });

};

export default App;
