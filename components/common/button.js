import styles from './Button.module.css'

function Button(props) {
    const buttonClassName = props.color === "white" ? styles.buttonLight : styles.buttonDark;
    const imgClassName = props.color === "white" ? styles.imgLight : styles.imgDark;

    return (
        <div className={buttonClassName}>
            <a href={props.hyperlink}>
                    <strong>{props.title}</strong>
                    <img className={imgClassName} src="/SignUpButton.svg"/>
            </a>
        </div>
    )
}

export default Button;