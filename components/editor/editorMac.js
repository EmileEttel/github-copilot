import EditorTerminal from "./editorTerminal"
import styles from "./Mac.module.css"

function EditorMac(props) {

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
                        <EditorTerminal underText='1' height="554px" charsize={104} segments='6' linenumber={props.linenumber} info_one={props.info_one} info_two={props.info_two} info_three={props.info_three} tabs={props.tabs} border="square" theme="white" />
                    </div>
                </div>
                <div className={styles.editorBottomBar}>
                    <div className={styles.editorBottomBarContent}  style={{width: '100%'}} >
                        <div className={styles.editorBottomBarSvgDiv}>
                            <img src="/bottomgithublogo.svg" className={styles.editorBottomBarSvg}/>
                        </div>
                        main
                    </div>
                    <div className={styles.editorBottomBarCopilot}>
                        <img src="/copilottag.svg" className={styles.editorBottomBarCopilotSvg}/>
                    </div>
                    <div className={styles.editorBottomBarLocator}>
                        Ln 23 Col, 1
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorMac;