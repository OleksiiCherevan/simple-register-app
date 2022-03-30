import style from "./index.module.css";

const ButtonPrimary = (props) => {
    const { children, href='#', isDisabled = false } = props;

    return (
      <a href={href} className={style['link']}>
            <button disabled={isDisabled} className={style["button"]}>
                {children}
            </button>
        </a>
    );
};
export default ButtonPrimary;
