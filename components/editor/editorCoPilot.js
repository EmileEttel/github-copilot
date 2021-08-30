import styles from './Editor.module.css'

function EditorCopilot(props) {
    let key = 0;

    return (
        <>
            {props.letters >= props.textfull.length + 9 &&
                <div className={styles.copilotLeftBorder}>
                    {props.info_three.map((info) => (
                        <span key={key++} className={styles.copilotText} style={{ color: info.color }}>{info.text}</span>
                    ))}
                </div>
            }
        </>
    )
}

export default EditorCopilot;