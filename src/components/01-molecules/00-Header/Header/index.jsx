import style from "./index.module.css";

import ContainerMain from "components/00-atoms/09-containers/ContainerMain";

import Logo from "components/00-atoms/00-meta/Logo";
import ButtonPrimary from "components/00-atoms/01-buttons/ButtonPrimary";

const Header = () => {
    return (
        <div className={style["header"]}>
                <div className={style["content"]}>
                    <Logo></Logo>

                    <div className={style["nav"]}>
                        <ButtonPrimary>Users</ButtonPrimary>
                        <ButtonPrimary>Sign up</ButtonPrimary>
                    </div>
                </div>
        </div>
    );
};
export default Header;
