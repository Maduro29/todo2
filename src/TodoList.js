import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

const TodoList = (props) => {
    const { title, items, addNewItem, filter, changeFilter } = props;
    const left = items.length;
    const filteredList = applyFilter(items, filter);

    return (
        <div className="todolist">
        <Header title={title} addNewItem={addNewItem} />
        <ul className="list-group list-group-flush">
            {filteredList.length === 0 ? (
            <div className="alert alert-secondary">No items in the list.</div>
            ) : (
                filteredList.map(item => <TodoItem data={item} />)
            )}
        </ul>
        <Footer {...{left, filter, changeFilter }} />
        </div>
    );
}

const applyFilter = (list, filter) => {
    switch (filter) {
        case 'completed':
            return list.filter(item => item.completed === true);
        case 'active':
            return list.filter(item => item.completed !== true);
        default:
            return list;
    }
}

export default TodoList;