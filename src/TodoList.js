import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

const TodoList = (props) => {
    const {title, items} = props;
    console.log(title, items);
    let left = items.length;

    return (
        <div className="todolist">
            <Header title={title}/>
            <ul className="list-group list-group-flush">
                {items.map(item =>
                    <TodoItem item={item}/>
                )}
            <Footer left={left}/>
            </ul>
        </div>
    )
}

export default TodoList;