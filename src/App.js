import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';
// App will render the Timeline component
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Ada Lovelace's Timeline</h1>
        </header>
        <main className="App-main">
        <Timeline events={timelineData.events} />
        </main>
      </div>
    )};
}

export default App;