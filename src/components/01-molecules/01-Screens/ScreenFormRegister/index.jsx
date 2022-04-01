import style from "./index.module.css";
import { useEffect, useState } from "react";


import Preloader from "components/00-atoms/00-meta/Preloader";
import ButtonPrimary from "components/00-atoms/01-buttons/ButtonPrimary";
import UploadImage from "components/00-atoms/04-fields/UploadImage";
import HSeparator50 from "components/00-atoms/05-separators/HSeparator50";

import UserSignUpForm from "components/01-molecules/03-Forms/UserRegistration";
import Pasitions from "components/01-molecules/03-Forms/Positions";
import ScreenSuccess from "components/01-molecules/01-Screens/ScreenSuccess";


import axios from "axios";

const FormRegister = (props) => {
    const {onSetUsers = () => {}} = props;

    const [token, setToken] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [userInfo, setUserInfo] = useState({ isCorrect: false });
    const [positionId, setPosition] = useState("");
    const [imageInfo, setImageInfo] = useState({ isCorrect: true });

    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsCorrect(userInfo.isCorrect && imageInfo.isCorrect);
    }, [userInfo, imageInfo]);

    useEffect(() => {
        fetch("https://frontend-test-assignment-api.abz.agency/api/v1/token")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setToken(data.token);
            })
            .catch(function (error) {
                // proccess network errors
            });
    }, []);

    const onUserSend = (event) => {
        setIsLoading(true);
        var formData = new FormData();
        formData.append("position_id", positionId);
        formData.append("name", userInfo.name);
        formData.append("email", userInfo.email);
        formData.append("phone", userInfo.phone);
        formData.append("photo", imageInfo.image);

        axios
            .post(
                "https://frontend-test-assignment-api.abz.agency/api/v1/users",
                // "",
                formData,
                {
                    headers: {
                        "Token": token,
                    },
                }
            )
            .then(function (response) {
                let data = response.data;
                if (data.success) {
                    // process success response
                    setIsLoading(false);
                    setIsSuccess(true);
                    onSetUsers()
                } else {
                    // proccess server errors
                }
            })
            .catch(function (error) {
                alert(`Something bad... ${error}`)
            });
    };

    if (isSuccess) {
        return (
            <ScreenSuccess
                onClick={() => {
                    setIsLoading(false);
                    setIsSuccess(false);
                }}
            ></ScreenSuccess>
        );
    }
    if (isLoading) {
        return <Preloader></Preloader>;
    }
    return (
        <div className={style["register"]} id="register">
            <h1 className={style["header"]}>Working with GET request</h1>
            <HSeparator50></HSeparator50>
            <form className={style["form"]}>
                <UserSignUpForm onChange={setUserInfo}></UserSignUpForm>

                <div className={style["position"]}>
                    <Pasitions
                        header={"Select your position"}
                        onChange={setPosition}
                    ></Pasitions>
                </div>

                <div className={style["upload-image"]}>
                    <UploadImage onSelect={setImageInfo}></UploadImage>
                </div>
            </form>

            <HSeparator50></HSeparator50>

            <div className={style["sign-up"]}>
                <ButtonPrimary isDisable={!isCorrect} onClick={onUserSend}>
                    Sign up
                </ButtonPrimary>
            </div>
        </div>
    );
};
export default FormRegister;
