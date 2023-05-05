import './App.css';
import React, {Component} from 'react';
import TodoList from './components/TodoList';
import StateProvider from './components/StateProvider';
import KeyStrokeHandler from './components/KeyStrokeHandler';

class App extends Component {
  render() {

    return (
      <div className='container'>
        <div className='row'>
          <StateProvider>
            <KeyStrokeHandler>
              <TodoList />
            </KeyStrokeHandler>
          </StateProvider>
        </div>
      </div>
    )
  }
}

export default App;
