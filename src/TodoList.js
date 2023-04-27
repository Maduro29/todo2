import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const {title, items} = props;
    console.log(title, items);

    return (
        <div className="todolist">
            <Header title={title}/>
            <ul className="list-group list-group-flush">
                {items.map(item =>
                    <TodoItem item={item}/>
                )}
            </ul>
        </div>
    )
}

export default TodoList;