import style from "./index.module.css";

import UsersCard from "components/01-molecules/02-UsersCard";
import ButtonPrimary from "components/00-atoms/01-buttons/ButtonPrimary";

import Preloader from "components/00-atoms/00-meta/Preloader";
import HSeparator50 from "components/00-atoms/05-separators/HSeparator50";
import HSeparator140 from "components/00-atoms/05-separators/HSeparator140";

const ScreenUsers = (props) => {
    const {users, isLoading, isAllUsers, onClick=()=>{}} = props;    

    const onShowMore = () => {
        onClick();
    };

    if (isLoading) {
        return <Preloader></Preloader>;
    }

    return (
        <>
            <div className={style["users"]} id='users'>
                <h1 className={style["header"]}>Working with GET request</h1>
                <HSeparator50></HSeparator50>
                <div className={style["cards"]}>
                    <UsersCard users={users}></UsersCard>
                </div>
                <HSeparator50></HSeparator50>
                {!isAllUsers ? (
                    <div className={style["show-more"]}>
                        <ButtonPrimary onClick={onShowMore}>
                            Show more
                        </ButtonPrimary>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};
export default ScreenUsers;
