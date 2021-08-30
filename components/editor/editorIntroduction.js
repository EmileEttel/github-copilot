import ButtonEditor from '../buttons/buttonEditor'
import styles from './Introduction.module.css'
import Editor from './editor'
import { useState } from 'react';

function TerminalIntroduction() {
    class Info {
        constructor(text, color) {
            this.text = text;
            this.color = color;
        }
    }
    const [time, setTimeLeft] = useState(0)
    if (time < 146) {
        setTimeout(() => {
            setTimeLeft(time + 1);
        }, 25);
    }
    
    let pink = "#ff8ad1";
    let purple = "#ba8ef7";
    let green = "#5bec95";
    let yellow = "#e7d564";
    let blue = "#89ddff";
    let lightgrey = "#939da5";
    let grey = "#707a84"
    let orange = "#ffa763";
    const info_one = [new Info('#!/usr/bin/env ts-node\n\n', "#ff8ad1"), new Info('import', "#ba8ef7"), new Info('{ fetch }', "#939da5"), new Info('from', "#ba8ef7"), new Info('"fetch-h2";\n\n', "#5bec95")];
    const info_two = [new Info('// Determine whether the sentiment of text is positive\n// Use a web service\n', grey), new Info('async function', purple), new Info(' isPositive', yellow), new Info('(text: ', lightgrey), new Info('string', blue), new Info('): ', lightgrey), new Info('Promise', yellow), new Info('<', lightgrey), new Info('boolean', blue), new Info('> {\n', lightgrey)];
    const info_three = [new Info('  const ', purple), new Info('response = ', lightgrey), new Info('await ', purple), new Info('fetch', yellow), new Info('(', lightgrey), new Info('`http://text-processing.com/api/sentiment/`', green), new Info(', {\n', lightgrey), new Info('    method', orange), new Info(': ', lightgrey), new Info('"POST"', green), new Info(',\n    ', lightgrey), new Info('body', orange), new Info(': ', lightgrey), new Info('`text=', green), new Info('${text}', lightgrey), new Info('`', green), new Info(',\n    ', lightgrey), new Info('headers', orange), new Info(': {\n      ', lightgrey), new Info('"Content-Type"', green), new Info(': ', lightgrey), new Info('"application/x-www-form-urlencoded"', green), new Info(',\n    },\n  });\n  ', lightgrey), new Info('const ', purple), new Info('json = ', lightgrey), new Info('await ', purple), new Info('response.', lightgrey), new Info('json', yellow), new Info('();\n  ', lightgrey), new Info('return ', purple), new Info('json.label === ', lightgrey), new Info('"pos"', green), new Info(';\n}', lightgrey)]
    return (
        <div className={styles.editor}>
            <div className={styles.editorBorder}>
                <div className={styles.exampleTabs}>
                    <ButtonEditor svgpath="/tslogo.svg" title="sentiments.ts" position="side" />
                    <ButtonEditor svgpath="/gologo.svg" title="write_sql.go" />
                    <ButtonEditor svgpath="/pylogo.svg" title="parse_expenses.py" />
                    <ButtonEditor svgpath="/rblogo.svg" title="addresses.rb" />
                </div>
                <Editor linenumber="17" info_one={info_one} info_two={info_two} info_three={info_three} letters={time} />
            </div>
            {time >= 146 &&
                <>
                    <div className={styles.replayButtonDiv}>
                        <button onClick={() => setTimeLeft(0)} className={styles.replayButton}>
                            <div className={styles.replaySvg}>
                                <img src="./replaylogo.svg" />
                            </div>
                            Replay
                        </button>
                    </div>
                    <div className={styles.copilotTagDiv}>
                        <div className={styles.copilotTagText}>
                            <div className={styles.copilotTagSvg}>
                                <img src="./copilottag.svg" />
                            </div>
                            Copilot
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default TerminalIntroduction;