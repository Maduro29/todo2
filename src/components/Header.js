import React from "react";
import InputBox from "./InputBox";

const Header = (props) => {
    // const {title, addNew} = props;

    return (
        <header>
            <h1>Things To Do</h1>
            <InputBox addNew={props.addNew}/>
        </header>
    )
}

export default Header;