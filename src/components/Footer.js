import React from "react";
import Filter from "./Filter";

const Footer = (props) => {
    const {left, filter, changeFilter} = props;

    return (
        <div className="todo-footer clearfix">
            <div className="float-start">
                <span className="count-todos">{left}</span>
                {' items left'}
            </div>
            <div className="float-end">
                <Filter filter={filter} changeFilter={changeFilter} />
            </div>
        </div>
    )
}

export default Footer;