import React from "react";
import InputWrapper from "./InputWrapper";

const Header = (props) => {
    // const {title, addNew} = props;

    return (
        <header>
            <h1>Things To Do</h1>
            <InputWrapper {...props} />
        </header>
    )
}

export default Header;