import React from "react";

const TodoList = (props) => {
    const {title, items} = props;
    console.log(title, items);

    return (
        <div className="todolist">
            <h1>{title.toUpperCase()}</h1>
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
    )
}

export default TodoList;