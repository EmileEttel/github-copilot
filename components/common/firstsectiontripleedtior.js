import EditorTerminal from "../editor/editorTerminal";
import styles from "./Firstsection.module.css"
import {one_info_one, one_info_two, one_info_three, one_tabs, two_info_one, two_info_two, two_info_three, two_tabs, three_info_one, three_info_two, three_info_three, three_tabs} from "../editor/editorTripleEditorContent"

function FirstSectionTripleEditor() {

    return (
        <div className={styles.tripleEditorWhole}>
            <div className={styles.tripleEditorThird}>
                <div className={styles.thirdTextDiv}>
                    <p className={styles.thirdText}>
                        <span className={styles.thirdTextTitle}>Convert comments to code.</span> Write a comment describing the logic you want, and let GitHub Copilot assemble the code for you.
                    </p>
                    <EditorTerminal underText='1' height={["554px"]} charsize={[65]} segments={['7']} linenumber={["24"]} info_one={one_info_one} info_two={one_info_two} info_three={one_info_three} tabs={one_tabs} border="rounded" theme="white" />
                </div>
            </div>
            <div className={styles.tripleEditorThird}>
                <div className={styles.thirdTextDiv}>
                    <EditorTerminal underText='1' height={["457px"]} charsize={[75]} segments={['20']} linenumber={["16"]} info_one={two_info_one} info_two={two_info_two} info_three={two_info_three} tabs={two_tabs} border="rounded" theme="white" />
                    <p className={styles.thirdText}>
                        <span className={styles.thirdTextTitle}>Autofill for repetitive code.</span> GitHub Copilot works great for quickly producing boilerplate and repetitive code patterns. Feed it a few examples and let it generate the rest!
                    </p>
                </div>
            </div>
            <div className={styles.tripleEditorThird}>
                <div className={styles.thirdTextDiv}>
                    <p className={styles.thirdText}>
                        <span className={styles.thirdTextTitle}>Tests without the toil.</span> Tests are the backbone of any robust software engineering project. Import a unit test package, and let GitHub Copilot suggest tests that match your implementation code.
                    </p>
                    <EditorTerminal underText='1' height={["607px"]} charsize={[24]} segments={['3']} linenumber={["12"]} info_one={three_info_one} info_two={three_info_two} info_three={three_info_three} tabs={three_tabs} border="rounded" theme="white" />
                </div>
            </div>
        </div>
    )
}

export default FirstSectionTripleEditor;