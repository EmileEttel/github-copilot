import styles from "./Frequentlyasked.module.css"

function FrequentlyAsked() {

    return (
        <section className={styles.faqSection}>
            <div className={styles.faqDiv}>
                <div style={{ marginBottom: '40px' }}>
                    <h2 className={styles.faqTitle}>Frequently<br />asked questions</h2>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className={styles.faqButtonList}>
                        <button className={styles.faqButton}>General</button>
                        <button className={styles.faqButton}>Training Set</button>
                        <button className={styles.faqButton}>Protecting originality</button>
                        <button className={styles.faqButton}>Responsible AI</button>
                        <button className={styles.faqButton}>Telemetry</button>
                        <button className={styles.faqButton}>Availability</button>
                    </div>
                    <div className={styles.faqAnswers}>
                        <div>
                            <div className={styles.faqAnswerTitle}>What is GitHub Copilot?</div>
                            <div className={styles.faqAnswerDesc}>GitHub Copilot is an AI pair programmer that helps you write code faster and with less work. GitHub Copilot draws context from comments and code, and suggests individual lines and whole functions instantly. GitHub Copilot is powered by OpenAI Codex, a new AI system created by OpenAI. The GitHub Copilot technical preview is available as a Visual Studio Code extension.</div>
                        </div>
                        <div>
                            <div className={styles.faqAnswerTitle}>How does GitHub Copilot work?</div>
                            <div className={styles.faqAnswerDesc}>OpenAI Codex was trained on publicly available source code and natural language, so it understands both programming and human languages. The GitHub Copilot editor extension sends your comments and code to the GitHub Copilot service, which then uses OpenAI Codex to synthesize and suggest individual lines and whole functions.</div>
                        </div>
                        <div>
                            <div className={styles.faqAnswerTitle}>How good is GitHub Copilot?</div>
                            <div className={styles.faqAnswerDesc}>We recently benchmarked against a set of Python functions that have good test coverage in open source repos. We blanked out the function bodies and asked GitHub Copilot to fill them in. The model got this right 43% of the time on the first try, and 57% of the time when allowed 10 attempts. And it’s getting smarter all the time.</div>
                        </div>
                        <div>
                            <div className={styles.faqAnswerTitle}>Does GitHub Copilot write perfect code?</div>
                            <div className={styles.faqAnswerDesc}>No. GitHub Copilot tries to understand your intent and to generate the best code it can, but the code it suggests may not always work, or even make sense. While we are working hard to make GitHub Copilot better, code suggested by GitHub Copilot should be carefully tested, reviewed, and vetted, like any other code. As the developer, you are always in charge.</div>
                        </div>
                        <div>
                            <div className={styles.faqAnswerTitle}>How do I get the most out of GitHub Copilot?</div>
                            <div className={styles.faqAnswerDesc}>It works best when you divide your code into small functions, use meaningful names for functions parameters, and write good docstrings and comments as you go. It also seems to do best when it’s helping you navigate unfamiliar libraries or frameworks.</div>
                        </div>
                        <div>
                            <div className={styles.faqAnswerTitle}>What context does GitHub Copilot use to generate suggestions?</div>
                            <div className={styles.faqAnswerDesc}>GitHub Copilot uses the current file as context when making its suggestions. It does not yet use other files in your project as inputs for synthesis. This means that, for example, copy/pasting a type declaration into the file you’re working on may improve suggestions from GitHub Copilot. This is something we will improve in the future.</div>
                        </div>
                        <div>
                            <div className={styles.faqAnswerTitle}>How will GitHub Copilot get better over time?</div>
                            <div className={styles.faqAnswerDesc}>GitHub Copilot doesn’t actually test the code it suggests, so the code may not even compile or run. GitHub Copilot can only hold a very limited context, so even single source files longer than a few hundred lines are clipped and only the immediately preceding context is used. And GitHub Copilot may suggest old or deprecated uses of libraries and languages. You can use the code anywhere, but you do so at your own risk.</div>
                        </div>
                        <div>
                            <div className={styles.faqAnswerTitle}>How can I contribute?</div>
                            <div className={styles.faqAnswerDesc}>The best way to contribute is to sign up for the technical preview. By using GitHub Copilot and sharing your feedback, you help to improve the models that power GitHub Copilot.</div>
                        </div>
                        <div>
                            <div className={styles.faqAnswerTitle}>Can I post code suggested by GitHub Copilot to social media like Twitter?</div>
                            <div className={styles.faqAnswerDesc}>Of course! Please use <a className={styles.GitHubCopilotTwitter} href="https://twitter.com/hashtag/GitHubCopilot">#GitHubCopilot</a> when you post so we can see what you produce!</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FrequentlyAsked;