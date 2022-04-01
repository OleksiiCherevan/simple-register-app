import style from "./index.module.css";
import { useEffect, useState } from "react";

const DEFAULT_NAME = "Upload your photo";

const UploadImage = (props) => {
    const { id = "actual-btn", onSelect = () => {}, errorMessage ="Photo has bad format..." } = props;

    const [selectedImageInfo, setSelectedImageInfo] = useState({
        isCorrect: false,
    });

    const [imageName, setImageName] = useState("");

    const isWeightValid = (size, maxSize = 5) => {
        let fileSize = (size / 1024 / 1024).toFixed(4); // MB
        return fileSize < maxSize;
    };

    const isDimensionsValid = (heigth, width, minSize = 70) => {
        return heigth > minSize && width > minSize;
    };

    const isExtensionValid = (extension) => {
        return /(jpeg|jpg)$/.test(extension);
    };

    useEffect(() => {
        onSelect({
            image: selectedImageInfo.image,
            isCorrect:
                // (!imageName && !selectedImageInfo.isCorrect) ||
                selectedImageInfo.isCorrect,
        });
    }, [selectedImageInfo, imageName]);

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
                    setImageName(eventFile.name);
                    setSelectedImageInfo({ image: eventFile, isCorrect: true });
                } else {
                    setImageName(eventFile.name);
                    setSelectedImageInfo({ isCorrect: false });
                }
            };

            img.src = URL.createObjectURL(eventFile);
        }
    };

    return (
        <div className={style['upload-image']}>
            <input
                type="file"
                accept=".jpeg,.jpg"
                id={id}
                hidden
                onChange={onFileChange}
            />

            <label className={style["label"]} htmlFor={id}>
                <div
                    className={`${style["button"]} ${
                        !selectedImageInfo.isCorrect && imageName
                            ? style["border-error"]
                            : ""
                    }`}
                >
                    <div
                        className={`${style["text"]} ${style["text_selected"]}`}
                    >
                        Upload
                    </div>
                </div>
                <div
                    className={`${style["button-label"]} ${
                        !selectedImageInfo.isCorrect && imageName
                            ? style["border-error"]
                            : "s"
                    }`}
                >
                    <div
                        className={`${style["text"]} ${style["text_default"]} ${
                            imageName ? style["text_selected"] : ""
                        }`}
                    >
                        {imageName ? imageName : DEFAULT_NAME}
                    </div>
                </div>
            </label>
            {(imageName && !selectedImageInfo.isCorrect) ? (
                <div className={`${style["error"]} ${style["error_color"]}`}>
                    {errorMessage}
                </div>
            ) : null}
        </div>
    );
};
export default UploadImage;
