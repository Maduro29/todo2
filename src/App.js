import './App.css';
import React, {Component} from 'react';
import TodoList from './components/TodoList';

class App extends Component {
  render() {

    return (
      <div className='container'>
        <div className='row'>
          <TodoList />
        </div>
      </div>
    )
  }
}

export default App;
