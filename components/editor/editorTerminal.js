import ButtonEditor from '../buttons/buttonEditor'
import styles from './Introduction.module.css'
import Editor from './editor'
import { useEffect, useState } from 'react';
import EditorChartype from './editorchartype';

function EditorTerminal(props) {
    const borderStyle = props.border === "square" ? styles.borderSquare : styles.borderRound;
    const colorTheme = props.theme === "white" ? styles.whiteTheme : styles.blackTheme;
    const exampleTabs = props.theme === "white" ? styles.whiteTabs : styles.blackTabs;
    const replayButton = props.theme === "white" ? styles.replayButtonWhite : styles.replayButtonBlack;
    const buttonClass = props.theme === "white" ? styles.buttonLight : styles.buttonDark;
    let buttonSide = props.border === "square" ? 1 : 0;
    const [tab, setCurrentTab] = useState(0);
    const [time, setTimeLeft] = useState(0);
    const [test, setTestB] = useState(0);
    const [selectTab, setSelectTab] = useState(0);
    useEffect(() => {
        EditorChartype(tab, setCurrentTab, time, setTimeLeft, test, setTestB, selectTab, setSelectTab, props);
    }, [time])

    return (
        <div className={styles.editor} style={{ height: props.height[tab] }}>
            <div className={`${colorTheme} + ${borderStyle}`}>
                <div className={`${exampleTabs} + ${borderStyle}`}>
                    {props.tabs.map((tabs) => (
                        <span key={buttonSide}>
                            {buttonSide++ == 0 &&
                                <button className={`${buttonClass} + ${styles.sideborders}`} onClick={() => {
                                    setCurrentTab(tabs.tabnum)
                                    setTestB(1)
                                    setTimeLeft(time)
                                }}>
                                    <ButtonEditor svgpath={tabs.imgsrc} title={tabs.text} theme={props.theme} />
                                </button>
                            }
                            {buttonSide++ > 1 &&
                                <button className={`${buttonClass}`} onClick={() => {
                                    setCurrentTab(tabs.tabnum)
                                    setTestB(1)
                                    setTimeLeft(time)
                                }}>
                                    <ButtonEditor svgpath={tabs.imgsrc} title={tabs.text} theme={props.theme} />
                                </button>
                            }
                        </span>
                    ))}
                </div>
                <Editor underText={props.underText} theme={props.theme} linenumber={props.linenumber[tab]} info_one={props.info_one[tab]} info_two={props.info_two[tab]} info_three={props.info_three[tab]} letters={time} segments={props.segments[tab]} />
            </div>
            {props.underText == 1 && time >= props.charsize[tab] + 20 &&
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