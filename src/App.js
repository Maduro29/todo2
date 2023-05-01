import './App.css';
import React, {Component} from 'react';
import TodoList from './components/TodoList';
import StateProvider from './components/StateProvider';

class App extends Component {
  render() {

    return (
      <div className='container'>
        <div className='row'>
          <StateProvider>
            <TodoList />
          </StateProvider>
        </div>
      </div>
    )
  }
}

export default App;
