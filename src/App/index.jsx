import style from "./index.module.css";
import { useState, useEffect } from "react";

import ContainerMain from "../components/00-atoms/09-containers/ContainerMain";
import ContainerFull from "../components/00-atoms/09-containers/ContainerFull";

import Header from "components/01-molecules/00-Header/Header";
import EnterScreen from "components/01-molecules/01-Screens/ScreenEnter";
import ScreenUsers from "components/01-molecules/01-Screens/ScreenUsers";
import ScreenFormRegister from "components/01-molecules/01-Screens/ScreenFormRegister";
import HSeparator140 from "components/00-atoms/05-separators/HSeparator140";
import HSeparator100 from "components/00-atoms/05-separators/HSeparator100";

const COUNT = 6;
const PAGE = 1;

const App = () => {
    const [page, setPages] = useState(1);
    const [count, setCount] = useState(6);
    const [users, setUsers] = useState([]);

    const [isAllUsers, setIsAllUsers] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('registerd');
        fetchUsers()
    }, [count, page]);

    const fetchUsers = (fPage) => {
        setIsLoading(true);

        console.log(page, count);
        console.log(fPage ?? page);
        fetch(
            `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${fPage ?? page}&count=${count}`
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                if (data.success) {
                    setUsers([]);
                    setUsers(data.users);
                    setIsLoading(false);
                    setIsAllUsers(count * page > data["total_users"]);
                } else {
                    setIsAllUsers(true);
                    setIsLoading(false)
                }
            })
            .catch(() => {
                setIsAllUsers(true);
                setIsLoading(false);
            });
    };

    const onCountShowMore = () => {
        setPages(page + 1);
    };

    const onSetUsers = (users) => {
        console.log('12312');
        setPages(1);
        fetchUsers(1)
    };

    return (
        <div className={style["app"]}>
            <Header></Header>

            <ContainerFull>
                <EnterScreen></EnterScreen>
            </ContainerFull>

            <HSeparator140></HSeparator140>

            <ContainerMain>
                <ScreenUsers
                    users={users}
                    isLoading={isLoading}
                    isAllUsers={isAllUsers}
                    onClick={onCountShowMore}
                ></ScreenUsers>

                <HSeparator140></HSeparator140>

                <ScreenFormRegister
                    onSetUsers={onSetUsers}
                ></ScreenFormRegister>
            </ContainerMain>

            <HSeparator100></HSeparator100>
        </div>
    );
};
export default App;
