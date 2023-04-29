import React from "react";

const options = {
    all: 'All',
    completed: 'Completed',
    active: 'Active'
};

const Filter = (props) => {
    const {filter, changeFilter} = props;
    const getClass = key => (key === filter ? 'selected' : '');

    return (
        <ul className="filters list-unstyled clearfix">
          {Object.keys(options).map(key => (
            <li key={key}>
              <a href="#" onClick={() => changeFilter(key)} className={getClass(key)}>
                {options[key]}
              </a>
            </li>
          ))}
        </ul>
      );
}

export default Filter;