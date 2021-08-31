import ButtonEditor from '../buttons/buttonEditor'
import styles from './Introduction.module.css'
import Editor from './editor'
import { useState } from 'react';

function EditorTerminal(props) {
    const borderStyle = props.border === "square" ? styles.borderSquare : styles.borderRound;
    const colorTheme = props.theme === "white" ? styles.whiteTheme : styles.blackTheme;
    const exampleTabs = props.theme === "white" ? styles.whiteTabs : styles.blackTabs;
    const replayButton = props.theme === "white" ? styles.replayButtonWhite : styles.replayButtonBlack;
    const [time, setTimeLeft] = useState(0)
    if (time < props.charsize+20) {
        setTimeout(() => {
            setTimeLeft(time + 1);
        }, 25);
    }
    let buttonSide = props.border === "square" ? 1 : 0;


    return (
        <div className={styles.editor} style={{ height: props.height }}>
            <div className={`${colorTheme} + ${borderStyle}`}>
                <div className={`${exampleTabs} + ${borderStyle}`}>
                    {props.tabs.map((tabs) => (
                        <ButtonEditor key={buttonSide} svgpath={tabs.imgsrc} title={tabs.text} position={buttonSide++} theme={props.theme} />
                    ))}
                </div>
                <Editor theme={props.theme} linenumber={props.linenumber} info_one={props.info_one} info_two={props.info_two} info_three={props.info_three} letters={time} segments={props.segments}/>
            </div>
            {time >= props.charsize+20 &&
                <>
                    <div className={styles.replayButtonDiv}>
                        <button onClick={() => setTimeLeft(0)} className={replayButton}>
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