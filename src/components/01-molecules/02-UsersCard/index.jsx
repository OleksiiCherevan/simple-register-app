import style from "./index.module.css";
import CardUser from "components/00-atoms/02-cards/CardUser";

const UsersCards = (props) => {
    const { users = [] } = props;

    return (
        <div className={style["cards"]}>
            {users.map((user) => (
                <div className={style["card"]} key={user.id}>
                    <CardUser
                        image={user.photo}
                        name={user.name}
                        position={user.position}
                        email={user.email}
                        phone={user.phone}
                    ></CardUser>
                </div>
            ))}
        </div>
    );
};

export default UsersCards;
