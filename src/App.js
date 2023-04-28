import './App.css';
import React, {useCallback, useState} from 'react';
import TodoList from './TodoList';

const ITEMS_INITIAL_STATE = [
  {
    id: 1,
    text: 'Take out the trash',
    completed: false
  },
  {
    id: 2,
    text: 'Join viewing party',
    completed: false
  },
  {
    id: 3,
    text: 'Play basketball',
    completed: false
  }
];

function App() {
  const title = "Things to do";
  const [items, updateItems] = useState(ITEMS_INITIAL_STATE);
  const addNewItem = useCallback(text => {
    updateItems(items => {
      const nextId = items.length + 1;
      const newItem = {
        id: nextId,
        text: text,
        completed: false
      };

      return [...items, newItem];
    })
  }, [updateItems])

  return (
    <div className="container">
      <div className="row">
        <TodoList title={title} items={items} addNewItem={addNewItem}/>
      </div>
    </div>
  );
}

export default App;
