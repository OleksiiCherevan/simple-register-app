import ButtonPrimary from "components/00-atoms/01-buttons/ButtonPrimary";
import style from "./index.module.css";

const Enter = () => {
    return (
        <>
            <div className={style["enter"]}>
                <div className={style["background"]}></div>
                <div className={style["content"]}>
                    <h1 className={style["header"]}>
                        Test assignment for front-end developer
                    </h1>
                    <div className={style["message"]}>
                        What defines a good front-end developer is one that has
                        skilled knowledge of HTML, CSS, JS with a vast
                        understanding of User design thinking as they'll be
                        building web interfaces with accessibility in mind. They
                        should also be excited to learn, as the world of
                        Front-End Development keeps evolving.
                    </div>
                    <a href="#register">
                        <ButtonPrimary>Sign up</ButtonPrimary>
                    </a>
                </div>
            </div>
        </>
    );
};
export default Enter;
