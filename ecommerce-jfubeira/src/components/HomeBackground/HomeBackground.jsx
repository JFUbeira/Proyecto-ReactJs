import s from "./HomeBackground.module.css";

const HomeBackground = () => {
    return (
        <div className={s.backgroundContainer}>
            <div className={s.img1}>
                <div className={s.verano}>COLECCIÓN VERANO</div>
            </div>
            <div className={s.img2}>
                <div className={s.invierno}>COLECCIÓN INVIERNO</div>
            </div>
        </div>
    );
};

export default HomeBackground;
