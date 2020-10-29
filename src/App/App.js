import React, { Component } from 'react';
import './App.scss';
import GroupList from '../Components/GroupList/GroupList';
import StudentList from '../Components/StudentList/StudentList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <StudentList />
      </div>
    );
  }
}

export default App;
