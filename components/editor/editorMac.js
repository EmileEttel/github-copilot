import styles from "./Mac.module.css"

function EditorMac(props) {

    return (
        <div className={styles.editorArea}>
            <div className={styles.editorWindow}>
                <div className={styles.editorMacBar}></div>
            </div>
        </div>
    )
}

export default EditorMac;