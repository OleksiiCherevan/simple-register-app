import style from "./index.module.css";
import { createRef, useEffect, useRef, useState } from "react";

const UploadImage = (props) => {
    const { id = "actual-btn", onSelect = () => {} } = props;
    const [selectedImage, setSelectedImage] = useState({isCorrect: false});

    const [imageName, setImageName] = useState("Upload your photo")

    const isWeightValid = (size, maxSize = 5) => {
        let fileSize = (size / 1024 / 1024).toFixed(4); // MB
        return fileSize < maxSize;
    };

    const isDimensionsValid = (heigth, width, minSize = 70) => {
        return (heigth > minSize && width > minSize);
    };

    const isExtensionValid = (extension) => {
        return /(jpeg|jpg)$/.test(extension);
    };

    useEffect(() => {
        onSelect(selectedImage);
    }, [selectedImage]);

    const onFileChange = (event) => {
        const eventFiles = event.currentTarget.files;
        if (eventFiles) {
            if (eventFiles.length === 0) {
                return;
            }
            let eventFile = eventFiles[0];
            let dimensions = { height: 0, width: 0 };

            let img = document.createElement("img");
            img.onload = function () {
                dimensions = { width: img.width, height: img.height };

                if (
                    isDimensionsValid(dimensions.height, dimensions.width) &&
                    isExtensionValid(eventFile.type) &&
                    isWeightValid(eventFile.size)
                ) {
                    setImageName(eventFile.name)
                    setSelectedImage({image: eventFile, isCorrect: true });
                }

                console.log(dimensions, eventFile, isDimensionsValid(dimensions.height, dimensions.width) &&
                isExtensionValid(eventFile.type) &&
                isWeightValid(eventFile.size));
            };

            img.src = URL.createObjectURL(eventFile);
            
            
        }
    };

    return (
        <div>
            <input
                type="file"
                accept=".jpeg,.jpg"
                id={id}
                hidden
                onChange={onFileChange}
            />

            <label className={style["label"]} htmlFor={id}>
                <div className={style["button"]}>
                    <div className={style["text"]}>Upload</div>
                </div>
                <div className={style["button-label"]}>
                    <div className={style["text"]}>{imageName}</div>
                </div>
            </label>
        </div>
    );
};
export default UploadImage;
