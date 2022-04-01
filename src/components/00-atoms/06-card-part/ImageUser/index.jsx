import style from "./index.module.css";

import BLANK_USER from "assets/images/photo-cover.svg";
import { useEffect, useState } from "react";

function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good;
    img.onerror = bad;
    img.src = imageSrc;
}

const ImageUser = (props) => {
    const { image, name = "User photo" } = props;

    const [userImage, setUserImage] = useState(BLANK_USER);

    useEffect(() => {
        checkImage(
            image,
            () => {
                setUserImage(image);
            },
            () => {
                setUserImage(BLANK_USER);
            }
        );
    }, [image]);
    return <img className={style["photo"]} src={userImage} alt={name} />;
};

export default ImageUser;
