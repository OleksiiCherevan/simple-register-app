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
    const [isCorrect, setIsCorrect] = useState(true);

    const onChangeText = (event) => {
        let value = event.target.value;
        setText(value);

        if (pattern && (!value || pattern.test(value) === false)) {
            setIsCorrect(false);
        } else {
            setIsCorrect(true);
        }
    };

    useEffect(() => {
        onChange({ text, isCorrect: isCorrect && text });
    }, [text]);

    return (
        <div
            className={`${style["text-box"]} ${
                !isCorrect ? style["error_border"] : ""
            }`}
        >
            <label
                className={`${style["label"]} ${
                    !isCorrect ? style["error_color"] : ""
                } ${text ? `${style["label_start"]} ` : style["label_stop"]}`}
            >
                {placeholder}
            </label>

            <input
                type="text"
                className={style["input"]}
                value={text}
                onChange={onChangeText}
            ></input>

            {!isCorrect ? (
                <div className={`${style["error"]} ${style["error_color"]}`}>
                    {errorMessage}
                </div>
            ) : null}
        </div>
    );
};
export default TextBox;
