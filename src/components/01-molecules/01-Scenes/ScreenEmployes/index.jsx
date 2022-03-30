import style from "./index.module.css";

import EmployesCards from "components/01-molecules/02-EmployesCards";
import ButtonPrimary from "components/00-atoms/01-buttons/ButtonPrimary";

import USER from "assets/images/user.png";

const EMPLOYES = [
    {
        image: USER,
        name: "Salvador Stewart Flynn Thomas Salva de Lisabon",
        position: "Leading specialist of the department of internet security",
        email: "JeromeKlarkaJeromeKlarka19233623@gmail.com",
        phone: "+38 (098) 278 76 24",
    },
    {
        image: USER,
        name: "Salvador Stewart Flynn Thomas Salva de Lisabon",
        position: "Leading specialist of the department of internet security",
        email: "JeromeKlarkaJeromeKlarka19233623@gmail.com",
        phone: "+38 (098) 278 76 24",
    },
    {
        image: USER,
        name: "Salvador Stewart Flynn Thomas Salva de Lisabon",
        position: "Leading specialist of the department of internet security",
        email: "JeromeKlarkaJeromeKlarka19233623@gmail.com",
        phone: "+38 (098) 278 76 24",
    },
    {
        image: USER,
        name: "Salvador Stewart Flynn Thomas Salva de Lisabon",
        position: "Leading specialist of the department of internet security",
        email: "JeromeKlarkaJeromeKlarka19233623@gmail.com",
        phone: "+38 (098) 278 76 24",
    },
    {
        image: USER,
        name: "Salvador Stewart Flynn Thomas Salva de Lisabon",
        position: "Leading specialist of the department of internet security",
        email: "JeromeKlarkaJeromeKlarka19233623@gmail.com",
        phone: "+38 (098) 278 76 24",
    },
    {
        image: undefined,
        name: "Salvador Stewart Flynn Thomas Salva de Lisabon",
        position: "Leading specialist of the department of internet security",
        email: "JeromeKlarkaJeromeKlarka19233623@gmail.com",
        phone: "+38 (098) 278 76 24",
    },
];

const Employes = (props) => {
    const { employes = EMPLOYES } = props;

    return (
        <div className={style["employes"]}>
            <h1 className={style["header"]}>Working with GET request</h1>

            <div className={style["cards"]}>
                <EmployesCards employes={employes}></EmployesCards>
            </div>

            <div className={style["show-more"]}>
              <ButtonPrimary>Show more</ButtonPrimary>
            </div>
        </div>
    );
};
export default Employes;
