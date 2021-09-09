import Image from "next/image";
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
                                <Image layout="fill" src="/vsfilelogo.svg" className={styles.editorSidebarSvgTop} />
                            </div>
                            <div>
                                <Image layout="fill" src="/vssearchlogo.svg" className={styles.editorSidebarSvgTop} />
                            </div>
                            <div>
                                <Image layout="fill" src="/vsgithublogo.svg" className={styles.editorSidebarSvgTop} />
                            </div>
                            <div>
                                <Image layout="fill" src="/vsdebuglogo.svg" className={styles.editorSidebarSvgTop} />
                            </div>
                            <div>
                                <Image layout="fill" src="/vsextensionlogo.svg" className={styles.editorSidebarSvg} />
                            </div>
                        </div>
                        <div className={styles.editorSidebarBottom}>
                            <div>
                                <Image layout="fill" src="/vsprofilelogo.svg" className={styles.editorSidebarSvg} />
                            </div>
                            <div>
                                <Image layout="fill" src="/vssettingslogo.svg" className={styles.editorSidebarSvgBot} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.editorEditorDiv}>
                        <EditorTerminal underText='1' height={["554px", 0]} charsize={[104, 0]} segments='6' linenumber={props.linenumber} info_one={props.info_one} info_two={props.info_two} info_three={props.info_three} tabs={props.tabs} border="square" theme="white" />
                    </div>
                </div>
                <div className={styles.editorBottomBar}>
                    <div className={styles.editorBottomBarContent}  style={{width: '100%'}} >
                        <div className={styles.editorBottomBarSvgDiv}>
                            <Image layout="fill" src="/bottomgithublogo.svg" className={styles.editorBottomBarSvg}/>
                        </div>
                        main
                    </div>
                    <div className={styles.editorBottomBarCopilot}>
                        <Image layout="fill" src="/copilottag.svg" className={styles.editorBottomBarCopilotSvg}/>
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