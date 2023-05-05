import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { applyFilter, search } from "../services/filter";
import FilteredList from "./FilteredList";
import Info from "./Info";

const TodoList = (props) => {
    const {list, filter, mode, query} = props.data;
    const {addNew, changeFilter, changeMode, changeStatus, setSearchQuery} = props.actions;
    const left = list.length;
    const items = search(applyFilter(list, filter), query);

    return (
        <div className="todolist">
            <Header {...{addNew, mode, query, setSearchQuery }}/>
            <FilteredList items={items} changeStatus={changeStatus} />
            <Footer {...{left, filter, changeFilter, mode, changeMode}} />
            <Info {...{mode}}/>
        </div>
    )
}

export default TodoList;