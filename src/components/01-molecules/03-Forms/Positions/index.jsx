import style from "./index.module.css";
import { useEffect, useState } from "react";
import ButtonRadio from "components/00-atoms/01-buttons/ButtonRadioPrimary";

const Positions = (props) => {
    const { header, onChange = () => {} } = props;

    const [positions, setPositions] = useState([]);
    const [selected, setSelected] = useState();

    useEffect(() => {
        onChange(selected);
    }, [selected]);

    useEffect(() => {
        fetch(
            "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.success === true) {
                    let positions = data.positions;
                    setPositions(positions);
                    setSelected(positions.length > 0 ? positions[0].id : "");
                }
            });
    }, []);

    return (
        <div className={style["radio-buttons"]}>
            <div className={style["header"]}>{header}</div>

            {positions.map((radio) => (
                <ButtonRadio
                    key={radio.name}
                    value={radio.id}
                    text={radio.name}
                    selected={selected}
                    onChange={setSelected}
                ></ButtonRadio>
            ))}
        </div>
    );
};

export default Positions;
