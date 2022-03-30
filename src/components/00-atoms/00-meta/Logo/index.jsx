import style from "./index.module.css";
import LogoSVG from "assets/images/Logo.svg";

const Logo = () => {
    return <img className={style["logo"]} src={LogoSVG} />;
};
export default Logo;
