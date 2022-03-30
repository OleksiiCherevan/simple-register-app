import style from "./index.module.css";

import ContainerMain from "../components/00-atoms/09-containers/ContainerMain";
import ContainerFull from "../components/00-atoms/09-containers/ContainerFull";

import Header from "components/01-molecules/00-Header/Header";
import Enter from "components/01-molecules/01-Scenes/ScreenEnter";
import Employes from "components/01-molecules/01-Scenes/ScreenEmployes";

const App = () => {
    return (
        <div className={style["app"]}>
            <Header></Header>

            <ContainerFull>
                <Enter></Enter>
            </ContainerFull>

            <ContainerMain>
                <Employes></Employes>
            </ContainerMain>
        </div>
    );
};
export default App;
