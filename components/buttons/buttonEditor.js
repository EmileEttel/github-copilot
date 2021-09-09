import styles from './editor.module.css'

function ButtonEditor(props) {
    const text = props.title;
    const logo = props.svgpath
    const textColor = props.theme === "white" ? styles.textLight : styles.textDark;
    const svgColor = props.theme === "white" ? styles.svgLight : styles.svgDark;

    return (
        <>
            <div className={styles.divClass}>
                <img className={svgColor} src={logo} />
            </div>
            <a className={textColor}>{text}</a>
        </>
    )
}

export default ButtonEditor;