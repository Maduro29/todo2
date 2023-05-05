import React from "react";
import { MODE_CREATE, MODE_SEARCH, MODE_NONE } from "../services/mode";

const ButtonWrapper = (props) => {
    const {mode, changeMode} = props.props;
    const isCreateMode = () => mode === MODE_CREATE;
    const isSearchMode = () => mode === MODE_SEARCH;

    return (
        <div>
            <a title="Add New" className={"button add " + (isCreateMode() ? "selected" : " ")} onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}></a>
            <a title="Search" className={"button search " + (isSearchMode() ? "selected" : " ")} onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}></a>
        </div>
    )
}

export default ButtonWrapper;