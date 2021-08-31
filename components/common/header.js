import { useState } from 'react';
import EditorTerminal from '../editor/editorTerminal'
import Button from './button'
import styles from './Introduction.module.css'

function Header() {
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
    const tabs = [new Tabs("/tslogo.svg", "sentiments.ts"), new Tabs("/gologo.svg", "write_sql.go"), new Tabs("/pylogo.svg", "parse_expenses.py"), new Tabs("/rblogo.svg", "addresses.rb")]

    return (
        <section className={styles.introductionBackground}>
            <div className={styles.introduction}>
                <div className={styles.header}>
                    <div className={styles.introductionLogo}>
                        <img src="/github-copilot.svg"></img>
                    </div>
                    <Button title="Sign Up" hyperlink="https://github.com/features/copilot/signup" />
                </div>
                <h1 className={styles.bigTag}>
                    Technical Preview
                </h1>
                <h1 className={styles.bigTitle}>
                    Your AI pair programmer
                </h1>
                <h2 className={styles.smallSubtitle}>
                    With GitHub Copilot, get suggestions for whole lines or entire functions right inside your editor.
                </h2>
                <div className={styles.introWhiteButton}>
                    <Button title="Sign Up" hyperlink="https://github.com/features/copilot/signup" color="white" />
                </div>
                <EditorTerminal height="494px" charsize={146} linenumber="17" info_one={info_one} info_two={info_two} info_three={info_three} tabs={tabs} segments='10'/>
                <div className={styles.aiCredits}>
                    <span>Powered by</span>
                    <div className={styles.openAI}>
                        <img src="./openAI.svg" />
                    </div>
                </div>
                <div className={styles.aiDescription}>
                    <p className={styles.aiDesc}>Trained on billions of lines of public code, GitHub Copilot puts the knowledge you need at your fingertips, saving you time and helping you stay focused.</p>
                </div>
                <div className={styles.threeDescription}>
                    <div>
                        <div className={styles.threeDescSvg}>
                            <img src="./puzzlelogo.svg" />
                        </div>
                        <div className={styles.threeDescTitle}>
                            <h3 className={styles.threeDescH3}>Extends your editor</h3>
                        </div>
                        <div className={styles.threeDescText}>
                            <span>
                                GitHub Copilot is available today as a Visual Studio Code extension. It works wherever Visual Studio Code works — on your machine or in the cloud on
                                <a href="https://github.com/features/codespaces"> GitHub Codespaces</a>
                                . And it’s fast enough to use as you type.
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className={styles.threeDescSvg}>
                            <img src="./filelogo.svg" />
                        </div>
                        <div className={styles.threeDescTitle}>
                            <h3 className={styles.threeDescH3}>Speaks all the languages you love</h3>
                        </div>
                        <div className={styles.threeDescText}>
                            <span>
                                GitHub Copilot works with a broad set of frameworks and languages. The technical preview does especially well for Python, JavaScript, TypeScript, Ruby, and Go, but it understands dozens of languages and can help you find your way around almost anything.
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className={styles.threeDescSvg}>
                            <img src="./pilotlogo.svg" />
                        </div>
                        <div className={styles.threeDescTitle}>
                            <h3 className={styles.threeDescH3}>You’re the pilot</h3>
                        </div>
                        <div className={styles.threeDescText}>
                            <span>
                                With GitHub Copilot, you’re always in charge. You can cycle through alternative suggestions, choose which to accept or reject, and manually edit suggested code. GitHub Copilot adapts to the edits you make, matching your coding style.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;