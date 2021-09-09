import { useState } from 'react';
import EditorTerminal from '../editor/editorTerminal'
import Button from './button'
import styles from './Introduction.module.css'
import { info_one, info_two, info_three, heights, lines, charsizes, segments, tabs } from "../editor/editorHeaderContent.js"
import Image from 'next/image';

function Header() {

    return (
        <section className={styles.introductionBackground}>
            <div className={styles.introduction}>
                <div className={styles.header}>
                    <div className={styles.introductionLogo}>
                        <Image height="22.6px" width="179.767px" src="/github-copilot.svg" />
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
                <EditorTerminal underText={1} height={heights} charsize={charsizes} linenumber={lines} info_one={info_one} info_two={info_two} info_three={info_three} tabs={tabs} segments={segments} />
                <div className={styles.aiCredits}>
                    <span>Powered by</span>
                    <div className={styles.openAI}>
                        <Image width="120px" height="30px" src="/openAI.svg" />
                    </div>
                </div>
                <div className={styles.aiDescription}>
                    <p className={styles.aiDesc}>Trained on billions of lines of public code, GitHub Copilot puts the knowledge you need at your fingertips, saving you time and helping you stay focused.</p>
                </div>
                <div className={styles.threeDescription}>
                    <div>
                        <div className={styles.threeDescSvg}>
                            <Image width="28px" height="32px" src="/puzzlelogo.svg" />
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
                            <Image width="28px" height="32px" src="/filelogo.svg" />
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
                            <Image width="28px" height="32px" src="/pilotlogo.svg" />
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