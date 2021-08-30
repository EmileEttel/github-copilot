import ButtonEditor from '../buttons/buttonEditor'
import styles from './Introduction.module.css'
import Editor from './editor'
import { useState } from 'react';

function EditorTerminal(props) {
    const borderStyle = props.border === "square" ? styles.borderSquare : styles.borderRound;
    const colorTheme = props.theme === "white" ? styles.whiteTheme : styles.blackTheme;
    const [time, setTimeLeft] = useState(0)
    if (time < 146) {
        setTimeout(() => {
            setTimeLeft(time + 1);
        }, 25);
    }
    let buttonSide = 0;


    return (
        <div className={styles.editor}>
            <div className={`${styles.editorBorder} + ${borderStyle}`}>
                <div className={styles.exampleTabs}>
                    {props.tabs.map((tabs) => (
                        <ButtonEditor svgpath={tabs.imgsrc} title={tabs.text} position={buttonSide++} />
                    ))}
                </div>
                <Editor linenumber={props.linenumber} info_one={props.info_one} info_two={props.info_two} info_three={props.info_three} letters={time} />
            </div>
            {time >= 146 &&
                <>
                    <div className={styles.replayButtonDiv}>
                        <button onClick={() => setTimeLeft(0)} className={styles.replayButton}>
                            <div className={styles.replaySvg}>
                                <img src="/replaylogo.svg" />
                            </div>
                            Replay
                        </button>
                    </div>
                    <div className={styles.copilotTagDiv}>
                        <div className={styles.copilotTagText}>
                            <div className={styles.copilotTagSvg}>
                                <img src="/copilottag.svg" />
                            </div>
                            Copilot
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default EditorTerminal;