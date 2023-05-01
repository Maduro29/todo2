import React from "react";
import { MODE_CREATE, MODE_SEARCH } from "../services/mode";

const ButtonWrapper = (props) => {
    const {mode} = props.props;

    return (
        <div>
            <a title="Add New" className={'button add ' + (mode === MODE_CREATE ? 'selected' : '')}></a>
            <a title="Search" className={'button search ' + (mode === MODE_SEARCH ? 'selected' : '')}></a>
        </div>
    )
}

export default ButtonWrapper