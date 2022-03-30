import style from "./index.module.css";

const ButtonPrimary = (props) => {
    const { children, href='#', isDisable = false } = props;

    return (
      <a href={href} className={style['link']}>
            <button disabled={isDisable} className={style["button"]}>
                {children}
            </button>
        </a>
    );
};
export default ButtonPrimary;
