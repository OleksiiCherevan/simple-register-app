import style from "./index.module.css";

import ButtonPrimary from "components/00-atoms/01-buttons/ButtonPrimary";
import ButtonRadioPrimary from "components/00-atoms/01-buttons/ButtonRadioPrimary";
import { useState } from "react";
import TextBox from "components/00-atoms/04-fields/TextBox";

const FormRegister = (props) => {
    const {} = props;

    const [isValid, setIsValid] = useState(false);

    return (
        <div className={style["register"]}>
            <h1 className={style["header"]}>Working with GET request</h1>

            <form className="form">
                <div className="fields">
                    <TextBox></TextBox>
                </div>

                <div className={style["position"]}>
                    <ButtonRadioPrimary checked></ButtonRadioPrimary>
                </div>

                <div className="image"></div>
            </form>

            <div className={style["sign-up"]}>
                <ButtonPrimary isDisable={!isValid}>Sign up</ButtonPrimary>
            </div>
        </div>
    );
};
export default FormRegister;
