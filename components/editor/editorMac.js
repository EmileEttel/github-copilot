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
                        <div className={styles.editorSidebarBot}>
                            <div>
                                <img src="/vsprofilelogo.svg" className={styles.editorSidebarSvg} />
                            </div>
                            <div>
                                <img src="/vssettingslogo.svg" className={styles.editorSidebarSvgBot} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorMac;