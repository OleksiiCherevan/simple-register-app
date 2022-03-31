import style from "./index.module.css";
import { useState } from "react";

const ButtonRadio = (props) => {
    const { text, onChange, selected, value } = props;

    return (
        <div
            className={style["radio-container"]}
            onClick={() => {
                onChange(value);
            }}
        >
            <div
                className={`${style["radio-outer-circle"]}
                    ${value !== selected && style["unselected"]}
                `}
            >
                <div
                    className={`${style["radio-inner-circle"]} ${
                        value !== selected && style["unselected-circle"]}
                    `}
                />
            </div>
            <div className={style["helper-text"]}>{text}</div>
        </div>
    );
};

export default ButtonRadio;
