import './App.css';
import TodoList from './TodoList';

function App() {
  let title = "Things to do";

  let items = [
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
  ]

  return (
    <div className="container">
      <div className="row">
        <TodoList title={title} items={items}/>
      </div>
    </div>
  );
}

export default App;
