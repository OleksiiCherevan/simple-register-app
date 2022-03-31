import style from "./index.module.css";

import ButtonPrimary from "components/00-atoms/01-buttons/ButtonPrimary";
import ButtonRadioPrimary from "components/00-atoms/01-buttons/ButtonRadioPrimary";
import { useEffect, useState } from "react";
import TextBox from "components/00-atoms/04-fields/TextBox";
import Pasitions from "components/01-molecules/03-Forms/Positions";
import UserSignUpForm from "components/01-molecules/03-Forms/UserSignUpForm";
import UploadImage from "components/00-atoms/00-meta/UploadImage";

import axios from "axios";

const FormRegister = (props) => {
    const {} = props;

    const [token, setToken] = useState("");

    const [isCorrect, setIsCorrect] = useState(false);

    const [userInfo, setUserInfo] = useState({ isCorrect: false });

    const [positionId, setPosition] = useState("");

    const [image, setImage] = useState(undefined);

    useEffect(() => {
        console.log(positionId);
    }, [positionId]);

    useEffect(() => {
        setIsCorrect(userInfo.isCorrect);
    }, [userInfo]);

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
        var formData = new FormData();
        // file from input type='file'
        // var fileField = document.querySelector('input[type="file"]');
        formData.append("position_id", positionId);
        formData.append("name", userInfo.name);
        formData.append("email", userInfo.email);
        formData.append("phone", userInfo.phone);
        formData.append("photo", image.image);

        fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
            method: "POST",
            body: formData,
            headers: {
                Token: token,
            },
        })
        // axios.post("https://frontend-test-assignment-api.abz.agency/api/v1/users", formData, {
        //     headers: {
        //         Token: token
        //     }
        //   })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.success) {
                    // process success response
                } else {
                    // proccess server errors
                }
            })
            .catch(function (error) {
                // proccess network errors
            });
    };

    return (
        <div className={style["register"]}>
            <h1 className={style["header"]}>Working with GET request</h1>

            <form className={style["form"]}>
                <UserSignUpForm onChange={setUserInfo}></UserSignUpForm>

                <div className={style["position"]}>
                    <Pasitions
                        header={"Select your position"}
                        onChange={setPosition}
                    ></Pasitions>
                </div>

                <div className={style["upload-image"]}>
                    <UploadImage onSelect={setImage}></UploadImage>
                </div>
            </form>

            <div className={style["sign-up"]}>
                <ButtonPrimary isDisable={!isCorrect} onClick={onUserSend}>
                    Sign up
                </ButtonPrimary>
            </div>
        </div>
    );
};
export default FormRegister;

// var formData = new FormData();
// // file from input type='file'
// var fileField = document.querySelector('input[type="file"]');
// formData.append("position_id", positionId);
// formData.append("name", userInfo.name);
// formData.append("email", userInfo.email);
// formData.append("phone", userInfo.phone);
// formData.append("photo", image.image);
// fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
//     method: "POST",
//     body: formData,
//     headers: {
//         Token: token,
//         // get token with GET api/v1/token method
//     },
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//         if (data.success) {
//             // process success response
//         } else {
//             // proccess server errors
//         }
//     })
//     .catch(function (error) {
//         // proccess network errors
//     });


// .post(url, data, {
//     headers: {
//       aaid: this.ID,
//       token: this.Token
//     }
//   })