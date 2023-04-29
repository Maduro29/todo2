import React from "react";
import Header from "./Header";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import { applyFilter } from "../services/filter";

const TodoList = (props) => {
    const { title, items, addNew, filter, changeFilter } = props;
    const left = items.length;
    const filteredList = applyFilter(items, filter);

    return (
        <div className="todolist">
            <Header title={title} addNew={addNew} />
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

export default TodoList;