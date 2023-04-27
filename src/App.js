import './App.css';

function App() {
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
        <div className="todolist">
          <h1>Todos</h1>
          <ul className="list-group list-group-flush">
            {items.map(item =>
              <li className="list-group-item">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id={`todo-item-check-${item.id}`} />
                  <label className="form-check-label" htmlFor={`todo-item-check-${item.id}`}>
                    {item.text}
                  </label>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
