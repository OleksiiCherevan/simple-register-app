import style from "./index.module.css";

import Logo from "components/00-atoms/00-meta/Logo";
import ButtonPrimary from "components/00-atoms/01-buttons/ButtonPrimary";

const Header = () => {
    return (
        <div className={style["header"]}>
            <div className={style["content"]}>
                <Logo></Logo>

                <div className={style["nav"]}>
                    <a href="#users">
                        <ButtonPrimary>Users</ButtonPrimary>
                    </a>
                    <a href="#register">
                        <ButtonPrimary>Sign up</ButtonPrimary>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Header;
