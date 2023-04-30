import React, {Component} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { applyFilter } from "../services/filter";
import FilteredList from "./FilteredList";
import {FILTER_ALL} from './../services/filter';
import {getAll, addToList, updateStatus} from './../services/todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            items: getAll(),
            filter: FILTER_ALL
        }
    }

    addNew(text) {
        let updatedList = addToList(this.state.items, {text, completed: false});

        return updatedList;
    }

    changeFilter(filter) {
        this.setState({filter: filter});
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.items, itemId, completed);

        this.setState({items: updatedList});
    }

    render() {
        const {items, filter} = this.state;
        const left = items.length;
        const {addNew, changeFilter, changeStatus} = this;
        const filteredItems = applyFilter(items, filter);

        return (
            <div className="todolist">
                <Header addNew={addNew.bind(this)}/>
                <FilteredList items={filteredItems} changeStatus={changeStatus.bind(this)} />
                <Footer changeFilter={changeFilter.bind(this)} {...{left, filter}} />
            </div>
        )
    }
}

export default TodoList;