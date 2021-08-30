import styles from './editor.module.css'

function ButtonEditor(props) {
    const text = props.title;
    const logo = props.svgpath
    const buttonClass = props.theme === "light" ? styles.buttonLight : styles.buttonDark;
    const textColor = props.theme === "light" ? styles.textLight : styles.textDark;
    const svgColor = props.theme === "light" ? styles.svgLight : styles.svgDark;
    const borderStyle = props.position === "side" ? styles.sideborders : undefined 

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