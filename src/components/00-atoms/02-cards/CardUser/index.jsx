import ImageUser from "components/00-atoms/00-meta/ImageUser";
import LabelFixed from "components/00-atoms/03-labels/LabelFixed";
import style from "./index.module.css";

const CardUser = (props) => {
    const {
        image,
        name = "Salvador Stewart Flynn Thomas fdsafasf",
        position = "Frontend Developer Frontend ...",
        email = "frontend_develop@gmail.com",
        phone = "+38 (098) 278 44 24",
    } = props;

    return (
        <div className={style["card"]}>
            <div className={style["image"]}>
                <ImageUser image={image}></ImageUser>
            </div>
            <div className={style["name"]}>
                {/* <LabelFixed>{name}</LabelFixed> */}
                    <div className={style['fixed-size']}>{name}</div>
            </div>
            <div className={style["info"]}>
                <div className={style["position"]}>
                    {/* <LabelFixed>{position}</LabelFixed> */}
                    <div className={style['fixed-size']}>{position}</div>
                </div>
                <div className={style["email"]}>
                    {/* <LabelFixed>{email}</LabelFixed> */}
                    <div className={style['fixed-size']}>{email}</div>
                </div>
                <div className={style["phone"]}>
                    {/* <LabelFixed>{phone}</LabelFixed> */}
                    <div className={style['fixed-size']}>{phone}</div>
                </div>
            </div>
        </div>
    );
};
export default CardUser;
