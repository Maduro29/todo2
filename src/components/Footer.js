import React from "react";
import Filter from "./Filter";
import ButtonWrapper from "./ButtonWrapper";

const Footer = (props) => {
    const {left, filter, changeFilter } = props;

    return (
        <footer className="clearfix">
            <div className="pull-left buttons">
                <ButtonWrapper {...{props}} />
            </div>
            <div className="float-start">
                <span className="count-todos">{left}</span>
                {' items left'}
            </div>
            <div className="float-end">
                <Filter {...{filter, changeFilter}} />
            </div>
        </footer>
    )
}

export default Footer;