import ImageUser from "components/00-atoms/06-card-part/ImageUser";
import Tooltip from "components/00-atoms/00-meta/Tooltip";
import LabelFixed from "components/00-atoms/03-labels/LabelFixed";
import style from "./index.module.css";

const CardUser = (props) => {
    const {
        image,
        name = "Salvador Stewart Flynn Thomas fdsafasf",
        position = "Frontend Developer Frontend ...",
        email = "frontend_develop@gmail.com",
        phone = "+38(098)2784424",
    } = props;

    return (
        <div className={style["card"]}>
            <div className={style["image"]}>
                <ImageUser image={image}></ImageUser>
            </div>
            <div className={style["name"]}>
                {/* <LabelFixed>{name}</LabelFixed> */}
                <Tooltip>
                    <div className={style["fixed-size"]}>{name}</div>
                </Tooltip>
            </div>
            <div className={style["info"]}>
                <div className={style["position"]}>
                    {/* <LabelFixed>{position}</LabelFixed> */}
                    <Tooltip>
                        <div className={style["fixed-size"]}>{position}</div>
                    </Tooltip>
                </div>
                <div className={style["email"]}>
                    {/* <LabelFixed>{email}</LabelFixed> */}
                    <Tooltip>
                        <div className={style["fixed-size"]}>{email}</div>
                    </Tooltip>
                </div>
                <div className={style["phone"]}>
                    {/* <LabelFixed>{phone}</LabelFixed> */}
                    <Tooltip>
                        <div className={style["fixed-size"]}>{phone}</div>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};
export default CardUser;
