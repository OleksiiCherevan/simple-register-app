import style from "./index.module.css";

const Tooltip = (props) => {
    const { children, text } = props;
    return (
        <div className={style["tooltip"]}>
            {children}
            <span class={style["tooltiptext"]}>{children}</span>
        </div>
    );
};
export default Tooltip;
