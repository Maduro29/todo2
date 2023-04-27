import React from "react";

const TodoItem = (props) => {
    const item = props.item;

    return (
        <li className="list-group-item">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id={`todo-item-check-${item.id}`} />
                <label className="form-check-label" htmlFor={`todo-item-check-${item.id}`}>
                    {item.text}
                </label>
            </div>
        </li>
    )
}

export default TodoItem