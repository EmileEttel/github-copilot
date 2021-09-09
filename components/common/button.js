import styles from './Button.module.css'
import Image from 'next/dist/client/image';
function Button(props) {
    const buttonClassName = props.color === "white" ? styles.buttonLight : styles.buttonDark;
    const imgClassName = props.color === "white" ? styles.imgLight : styles.imgDark;

    return (
        <div className={buttonClassName}>
            <a href={props.hyperlink} style={{display: "flex"}}>
                    <strong>{props.title}</strong>
                    <div className={imgClassName}>
                    <Image width="16" height="16" src="/SignUpButton.svg" />
                    </div>
            </a>
        </div>
    )
}

export default Button;