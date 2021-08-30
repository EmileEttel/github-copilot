import { useState } from "react";
import EditorMac from "../editor/editorMac";
import styles from "./Firstsection.module.css"

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
                <EditorMac />
            </div>
        </section>
    )
}

export default FirstSection;