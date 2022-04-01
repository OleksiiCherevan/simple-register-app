import style from "./index.module.css";

import ContainerMain from "../components/00-atoms/09-containers/ContainerMain";
import ContainerFull from "../components/00-atoms/09-containers/ContainerFull";

import Header from "components/01-molecules/00-Header/Header";
import EnterScreen from "components/01-molecules/01-Screens/ScreenEnter";
import ScreenUsers from "components/01-molecules/01-Screens/ScreenUsers";
import ScreenFormRegister from "components/01-molecules/01-Screens/ScreenFormRegister";
import HSeparator140 from "components/00-atoms/05-separators/HSeparator140";
import HSeparator100 from "components/00-atoms/05-separators/HSeparator100";

const App = () => {
    return (
        <div className={style["app"]}>
            <Header></Header>

            <ContainerFull>
                <EnterScreen></EnterScreen>
            </ContainerFull>

            <HSeparator140></HSeparator140>

            <ContainerMain>
                <ScreenUsers></ScreenUsers>

                <HSeparator140></HSeparator140>

                <ScreenFormRegister></ScreenFormRegister>
            </ContainerMain>

            <HSeparator100></HSeparator100>
        </div>
    );
};
export default App;
