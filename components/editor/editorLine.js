import styles from './Editor.module.css'

function EditorLine(props) {
    let lines = parseInt(props.linenumber);
    let linecount = 1;
    let text = []
    let i = 0;
    let key = 0;

    while (linecount <= lines) {
        text[i] = linecount;
        linecount++;
        i++;
    }
    return (
        <div className={styles.numArea}>
            {text.map((paragraph) => (
                <span key={key++} className={styles.lineStyle}>{paragraph}</span>
            ))}
        </div>
    )
}

export default EditorLine;