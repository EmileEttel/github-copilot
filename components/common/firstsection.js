import { useState } from "react";
import EditorMac from "../editor/editorMac";
import styles from "./Firstsection.module.css"

function FirstSection() {
    class Info {
        constructor(text, color) {
            this.text = text;
            this.color = color;
        }
    }
    class Tabs {
        constructor(imgsrc, text) {
            this.text = text;
            this.imgsrc = imgsrc;
        }
    }
    let purple = "#ba8ef7";
    let blue = "#89ddff";
    let lightgrey = "#939da5";
    let black = "#000"
    let pink = "#ff8ad1";
    let green = "#5bec95";
    let yellow = "#e7d564";
    let grey = "#707a84"
    let orange = "#ffa763";
    const info_one = [new Info('package ', purple), new Info('main\n\n', black), new Info('type ', purple), new Info('Run ', black), new Info('struct ', purple), new Info('{\n    Time ', black), new Info('int ', purple), new Info('// in milliseconds\n    ', lightgrey), new Info('Results ', black), new Info('string\n    ', purple), new Info('Failed ', black), new Info('bool\n', purple), new Info('}\n\n', black)]
    const info_two = [new Info('// Get average runtime of successful runs in seconds\n', lightgrey), new Info('func ', purple), new Info('averageRuntimeInSeconds', blue), new Info('(runs []Run) ', black), new Info('float64 ', blue), new Info('{', black)];
    const info_three = [new Info('    var ', purple), new Info('totalTime ', black), new Info('int\n    ', purple), new Info('var ', purple), new Info('failedRuns ', black), new Info('int\n    for ', purple), new Info('_, run := ', black), new Info('range ', purple), new Info('runs {\n        ', black), new Info('if ', purple), new Info('run.Failed {\n                failedRuns++\n            } ', black), new Info('else ', purple), new Info('{\n                totalTime += run.Time\n            }\n        }\n\n            averageRuntime := ', black), new Info('float64', purple), new Info('(totalTime) / ', black), new Info('float64', purple), new Info('(len(runs) - failedRuns) / ', black), new Info('1000\n    ', yellow), new Info('return ', purple), new Info('averageRuntime\n}', black)];
    const tabs = [new Tabs("/gologo.svg", "runtime.go"), new Tabs("/jslogo.svg", "days_between_dates.js"), new Tabs("/gologo.svg", "server.go")]

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
                <EditorMac linenumber="23" info_one={info_one} info_two={info_two} info_three={info_three} tabs={tabs} />
            </div>
        </section>
    )
}

export default FirstSection;