import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { applyFilter } from "../services/filter";
import FilteredList from "./FilteredList";

const TodoList = (props) => {
    const {items, filter, mode} = props.data;
    const {addNew, changeFilter, changeStatus} = props.actions;
    const left = items.length;
    const filteredList = applyFilter(items, filter);

    return (
        <div className="todolist">
            <Header {...{addNew, mode}}/>
            <FilteredList items={filteredList} changeStatus={changeStatus} />
            <Footer {...{left, filter, changeFilter, mode}} />
        </div>
    )
}

export default TodoList;