import { useState } from "react";
import EditorMac from "../editor/editorMac";
import EditorMultipleChoices from "../editor/editorMutipleChoices";
import styles from "./Firstsection.module.css"
import FirstSectionTripleEditor from "./firstsectiontripleedtior";
import { info_one, info_two, info_three, tabs} from "../editor/editorFirstSectionContent"

function FirstSection() {

    return (
        <section>
            <div className={styles.sectionArea}>
                <div>
                    <div className={styles.firstSectionTitle}>
                        <h2 className={styles.firstSectionH2}>
                            <span>
                                More than au
                                <span className={styles.cursorBlinking}></span>
                                <span className={styles.lightgrey}>tocomplete</span>
                            </span>
                        </h2>
                    </div>
                    <p className={styles.firstSectionSubtitle}>
                        GitHub Copilot is powered by Codex, the new AI system created by OpenAI. GitHub Copilot understands significantly more context than most code assistants. So, whether it’s in a docstring, comment, function name, or the code itself, GitHub Copilot uses the context you’ve provided and synthesizes code to match. Together with OpenAI, we’re designing GitHub Copilot to get smarter at producing safe and effective code as developers use it.
                    </p>
                </div>
                <EditorMac linenumber={[23, ]} info_one={info_one} info_two={info_two} info_three={info_three} tabs={tabs} />
                <div className={styles.bigTitleDiv}>
                    <h3 className={styles.bigTitle}>Skip the docs and stop searching for exampels. Github Copilot helps you stay focused right in your editor.</h3>
                    <div className={styles.underline} />
                </div>
                <FirstSectionTripleEditor />
                <div className={styles.FirstSectionMCText}>
                    <p className={styles.thirdText}>
                        <span className={styles.thirdTextTitle}>
                            Show me alternatives.
                        </span>
                        Want to evaluate a few different approaches? GitHub Copilot can show you a list of solutions. Use the code as provided, or edit it to meet your needs.
                    </p>
                </div>
                <EditorMultipleChoices />
            </div>
        </section>
    )
}

export default FirstSection;