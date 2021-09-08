import styles from './Button.module.css'

function Button(props) {
    const buttonClassName = props.color === "white" ? styles.buttonLight : styles.buttonDark;
    const imgClassName = props.color === "white" ? "#000" : "#fff";

    return (
        <div className={buttonClassName}>
            <a href={props.hyperlink}>
                    <strong>{props.title}</strong>
                    <svg className={styles.img} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill={imgClassName} d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                    <path className={styles.imgStem} strokeLinecap={imgClassName} d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
            </a>
        </div>
    )
}

export default Button;