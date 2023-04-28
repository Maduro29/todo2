import React, {useState, useCallback} from "react";
import {KEY_RETURN} from "keycode-js";

function InputBox(props) {
    const [value, setValue] = useState(' ');
    const {addNewItem} = props;
    const handleKeyUpEvent = useCallback(e => {
        if (e.keyCode === KEY_RETURN) {
            addNewItem(e.target.value);
            console.log('KEY_RETURN pressed');
        }
    }, []);
    const handleChangeEvent = useCallback(e => {
        setValue(e.target.value);
    }, [setValue]);

    return (
        <input 
            type="text"
            className="form-control add-todo"
            value={value}
            onKeyUp={handleKeyUpEvent}
            onChange={handleChangeEvent}
            placeholder="Add new"
        />
    )
}

export default InputBox