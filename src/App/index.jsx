import style from "./index.module.css";

import ContainerMain from "../components/00-atoms/09-containers/ContainerMain";
import ContainerFull from "../components/00-atoms/09-containers/ContainerFull";

import Header from "components/01-molecules/00-Header/Header";
import EnterScreen from "components/01-molecules/01-Screens/ScreenEnter";
import ScreenUsers from "components/01-molecules/01-Screens/ScreenUsers";
import ScreenFormRegister from "components/01-molecules/01-Screens/ScreenFormRegister";

const App = () => {
    return (
        <div className={style["app"]}>
            <Header></Header>

            <ContainerFull>
                <EnterScreen></EnterScreen>
            </ContainerFull>

            <div className={style["separate140px"]}></div>

            <ContainerMain>
                <ScreenUsers></ScreenUsers>

                <div className={style["separate140px"]}></div>

                <ScreenFormRegister></ScreenFormRegister>
            </ContainerMain>
        </div>
    );
};
export default App;
