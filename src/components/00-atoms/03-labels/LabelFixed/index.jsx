import style from "./index.module.css";

const LabelFixed = (props) => {
    const { children, size = 20 } = props;

    return <div className={style["label"]}>
        {trimText(children, size)}
    </div>;
};

const trimText = (text, size, symbol = '.', symbolCount = 3) => {
    if (text.toString() !== text) {
        return
    }

    let newText = text.slice(0, size)
    let endText = text.length > size ? symbol.repeat(3) : ''

    return text ? newText + endText : text 
}
export default LabelFixed;
