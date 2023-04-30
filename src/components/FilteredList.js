import React from "react";
import TodoItem from "./TodoItem";

const FilteredList = (props) => {
    const {items, changeStatus} = props;

    if (items.length === 0) {
        return (
            <p className="alert alert-info">There are no items.</p>
        )
    }

    return (
        <ul className="list-group list-group-flush">
            {
                items.map(item => <TodoItem data={item} changeStatus={changeStatus} />)
            }
        </ul>
    )
}

export default FilteredList;