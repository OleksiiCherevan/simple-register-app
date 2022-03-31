import style from "./index.module.css";
import CardUser from "components/00-atoms/02-cards/CardUser";

import USER from "assets/images/user.png";
import { useEffect, useState } from "react";

const USERS = [
    {
        id: "30",
        name: "Angel",
        email: "angel.williams@example.com",
        phone: "+380496540023",
        position: "Designer",
        position_id: "4",
        registration_timestamp: 1537777441,
        photo: "https://frontend-test-assignment-api.abz.agency/images/users/5b977ba13fb3330.jpeg",
    },
];

const EmployesCards = (props) => {
    const {users= []} = props;

    // const [users, setUsers] = useState([])
    // const [page, setPage] = useState(1)
    // const [count, setCound] = useState(6)

    

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
export default EmployesCards;
