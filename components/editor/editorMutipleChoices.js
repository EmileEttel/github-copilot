import { useEffect, useState } from "react";
import EditorTerminal from "./editorTerminal";
import styles from "./Mac.module.css"
import {info_one, options, tabs, lines, heights} from "./editorMultipleChoicesContent"

function EditorMultipleChoices() {
    const [option, setOptionNbr] = useState(0)
        if (option < 0) {
            setOptionNbr(8);
        }
        if (option > 8) {
            setOptionNbr(0);
        }
    info_one[0][4] = options[option];
    
    return (
        <div className={styles.editorArea}>
            <div className={styles.editorWindow}>
                <div className={styles.editorMacBar}>
                    <div className={styles.redCircle}></div>
                    <div className={styles.yellowCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.editorMacBarText}>Visual Studio Code</div>
                </div>
                <div className={styles.editorTextArea}>
                    <div className={styles.editorSidebar}>
                        <div className={styles.editorSidebarTop}>
                            <div>
                                <img src="/vsfilelogo.svg" className={styles.editorSidebarSvgTop} />
                            </div>
                            <div>
                                <img src="/vssearchlogo.svg" className={styles.editorSidebarSvgTop} />
                            </div>
                            <div>
                                <img src="/vsgithublogo.svg" className={styles.editorSidebarSvgTop} />
                            </div>
                            <div>
                                <img src="/vsdebuglogo.svg" className={styles.editorSidebarSvgTop} />
                            </div>
                            <div>
                                <img src="/vsextensionlogo.svg" className={styles.editorSidebarSvg} />
                            </div>
                        </div>
                        <div className={styles.editorSidebarBottom}>
                            <div>
                                <img src="/vsprofilelogo.svg" className={styles.editorSidebarSvg} />
                            </div>
                            <div>
                                <img src="/vssettingslogo.svg" className={styles.editorSidebarSvgBot} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.editorEditorDiv}>
                        <div style={{ width: '0px' }}>
                            <div className={styles.multipleChoicesDiv}>
                                <button className={styles.multipleChoicesButton} onClick={() => setOptionNbr(option + 1)}>
                                    <span>Next</span>
                                    <span className={styles.multipleChoicesChar}>⌥]</span>
                                </button>
                                <div className={styles.multipleChoicesDivider} />
                                <button className={styles.multipleChoicesButton} onClick={() => setOptionNbr(option - 1)}>
                                    <span>Previous</span>
                                    <span className={styles.multipleChoicesChar}>⌥]</span>
                                </button>
                                <div className={styles.multipleChoicesDivider} />
                                <button className={styles.multipleChoicesButton}>
                                    <span>Accept</span>
                                    <span className={styles.multipleChoicesChar}>Tab</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div style={{maxWidth: "913px"}}>
                    <EditorTerminal underText='0' height={[heights[option]]} segments={['0']} linenumber={[lines[option]]} info_one={info_one} info_two={[0]} info_three={[0]} tabs={tabs} border="square" theme="white" />
                    </div>
                </div>
                <div className={styles.editorBottomBar}>
                    <div className={styles.editorBottomBarContent} style={{ width: '100%' }} >
                        <div className={styles.editorBottomBarSvgDiv}>
                            <img src="/bottomgithublogo.svg" className={styles.editorBottomBarSvg} />
                        </div>
                        main
                    </div>
                    <div className={styles.editorBottomBarCopilot}>
                        <img src="/copilottag.svg" className={styles.editorBottomBarCopilotSvg} />
                    </div>
                    <div className={styles.editorBottomBarLocator}>
                        Ln 23 Col, 1
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorMultipleChoices;