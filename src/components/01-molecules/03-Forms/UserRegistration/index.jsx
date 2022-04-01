import style from "./index.module.css";
import TextBox from "components/00-atoms/04-fields/TextBox";
import { useEffect, useState } from "react";

const NAME_PATTERN = /^[a-zA-Zа-яА-Я ]{2,60}$/;
const EMAIL_PATTERN = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
const PHONE_PATTERN = /^[\+]{0,1}380([0-9]{9})$/;

const UserSignUpForm = (props) => {
    const { onChange = () => {} } = props;
    const [name, setName] = useState({ text: "", isCorrect: false });
    const [email, setEmail] = useState({ text: "", isCorrect: false });
    const [phone, setPhone] = useState({ text: "", isCorrect: false });

    useEffect(() => {
        let isCorrect = !!(
            name.isCorrect &&
            email.isCorrect &&
            phone.isCorrect
        );
        let userIngo = getUserInfoFromCorrect(isCorrect);
        onChange(userIngo);
    }, [name, email, phone]);

    const getUserInfoFromCorrect = (isCorrect) => {
        return {
            name: name.text,
            email: email.text,
            phone: phone.text,
            isCorrect: isCorrect,
        };
    };

    return (
        <div className={style["sign-up"]}>
            <TextBox
                placeholder={"Your name"}
                errorMessage={"Incorrect name! Please use letters!"}
                pattern={NAME_PATTERN}
                onChange={setName}
            ></TextBox>

            <TextBox
                placeholder={"Email"}
                errorMessage={"Incorrect email! Please use valid email!"}
                pattern={EMAIL_PATTERN}
                onChange={setEmail}
            ></TextBox>

            <TextBox
                placeholder={"Phone"}
                errorMessage={
                    "Incorrect phone! Please use format like (+380123456789)!"
                }
                pattern={PHONE_PATTERN}
                onChange={setPhone}
            ></TextBox>
        </div>
    );
};
export default UserSignUpForm;
