import style from "./index.module.css";

const ACTIVE = (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="10" cy="10" r="9.5" stroke="#00BDD3" />
        <circle cx="10" cy="10" r="4.5" fill="#00BDD3" stroke="#00BDD3" />
    </svg>
);

const DISABLE = (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="10" cy="10" r="9.5" stroke="#D0CFCF" />
    </svg>
);

const ButtonPrimary = (props) => {
    const {
        name = "radio",
        value = "radio",
        checked = false,
        isDisable = false,
        onChange,
    } = props;

    return (
        <div className={style["check-box"]}>
            <input
                className={style["button"]}
                type={"radio"}
                name={name}
                id={value}
                value={value}
                checked={checked}
                disabled={isDisable}
                onChange={onChange}
            ></input>

            <label className={style["label"]} for={value}>
                <div className="out-circle">
                    <div className="inner-circle">
                        
                    </div>
                </div>
                {value}
            </label>
        </div>
    );
};
export default ButtonPrimary;
