import React from "react";

const Footer = (props) => {
    const left = props.left;

    return (
        <h2>Things left: {left}</h2>
    )
}

export default Footer;