import style from "./index.module.css";

const ButtonPrimary = (props) => {
    const { children, href='', isDisable = false, onClick=()=>{} } = props;

    return (
    //   <a href={href} className={style['link']}>
            <button disabled={isDisable} className={style["button"]} onClick={onClick}>
                {children}
            </button>
        // </a>
    );
};
export default ButtonPrimary;
