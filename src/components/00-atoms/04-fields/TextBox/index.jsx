import { useEffect, useState, createRef } from "react";
import style from "./index.module.css";

const TextBox = (props) => {
    const {
        placeholder = "label",
        errorMessage = "Pattern error",
        pattern = "",
        onChange = () => {},
    } = props;

    const [text, setText] = useState("");
    const [isError, setIsError] = useState(false);

    const onChangeText = (event) => {
        let value = event.target.value;
        setText(value);

        if (pattern && (!value || pattern.test(value) === false)) {
            setIsError(true);
        } else {
            setIsError(false);
        }
    };

    useEffect(() => {
        onChange({ text, isCorrect: !isError && text });
    }, [text]);

    return (
        <div
            className={`${style["text-box"]} ${
                isError ? style["error_border"] : ""
            }`}
        >
            <label
                className={`${style["label"]} ${
                    isError ? style["error_color"] : ""
                } ${text ? `${style["label_start"]} ` : style["label_stop"]}`}
            >
                {placeholder}
            </label>

            <input
                type="text"
                className={style["input"]}
                value={text}
                // pattern={pattern}
                onChange={onChangeText}
            ></input>

            {isError ? (
                <div
                    className={`${style["error"]} ${
                        isError ? style["error_color"] : ""
                    }`}
                >
                    {errorMessage}
                </div>
            ) : null}
        </div>
    );
};
export default TextBox;
