import CardUser from "components/00-atoms/02-cards/CardUser";
import style from "./index.module.css";

const EmployesCards = (props) => {
    const { employes = [] } = props;
    return (
        <div className={style["cards"]}>
            {employes.map((employee) => (
              <div className={style['card']}>
                <CardUser
                    image={employee.image}
                    name={employee.name}
                    position={employee.position}
                    email={employee.email}
                    phone={employee.phone}
                ></CardUser>
                </div>
            ))}
        </div>
    );
};
export default EmployesCards;
