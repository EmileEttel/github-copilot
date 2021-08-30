import styles from './editor.module.css'

function ButtonEditor(props) {
    class Info {
        constructor(text, color) {
            this.text = text;
            this.color = color;
        }
    }
    const text = props.title;
    const logo = props.svgpath
    const buttonClass = props.theme === "light" ? styles.buttonLight : styles.buttonDark;
    const textColor = props.theme === "light" ? styles.textLight : styles.textDark;
    const svgColor = props.theme === "light" ? styles.svgLight : styles.svgDark;
    const borderStyle = props.position === 0 ? styles.sideborders : undefined 

    return (
        <button className={`${buttonClass} + ${borderStyle}`}>
            <div className={styles.divClass}>
                <img className={svgColor} src={logo} />
            </div>
            <a className={textColor}>{text}</a>
        </button>
    )
}

export default ButtonEditor;