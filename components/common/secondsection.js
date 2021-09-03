import EditorTerminal from "../editor/editorTerminal";
import styles from "./Secondsection.module.css"

function SecondSection() {
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
        <section>
            <div className={styles.secondSection}>
                <div className={styles.secondSectionDiv}>
                    <h2 className={styles.secondSectionTitle} style={{ textAlign: 'center' }}>
                        Code confidently<br />in unfamiliar territory
                    </h2>
                    <p className={styles.secondSectionSubtitle} style={{ textAlign: 'center' }}>
                        Whether you’re working in a new language or framework, or just learning to code, GitHub Copilot can help you find your way. Tackle a bug, or learn how to use a new framework without spending most of your time spelunking through the docs or searching the web.
                    </p>
                    <div className={styles.secondSectionWhole}>
                        <div className={styles.secondSectionButtonDiv}>
                            <button className={styles.secondSectionButton}>
                                <div className={styles.secondSectionButtonSvgDiv}>
                                    <img className={styles.secondSectionButtonSvg} src="/twitterlogo.svg" />
                                </div>
                                <div className={styles.secondSectionButtonText}>Fetch tweets</div>
                            </button>
                            <button className={styles.secondSectionButton}>
                                <div className={styles.secondSectionButtonSvgDiv}>
                                    <img className={styles.secondSectionButtonSvg} src="/scatterplotlogo.svg" />
                                </div>
                                <div className={styles.secondSectionButtonText}>Draw a scatterplot</div>
                            </button>
                            <button className={styles.secondSectionButton}>
                                <div className={styles.secondSectionButtonSvgDiv}>
                                    <img className={styles.secondSectionButtonSvg} src="/memoizationlogo.svg" />
                                </div>
                                <div className={styles.secondSectionButtonText}>Memoization</div>
                            </button>
                            <button className={styles.secondSectionButton}>
                                <div className={styles.secondSectionButtonSvgDiv}>
                                    <img className={styles.secondSectionButtonSvg} src="/goodreadslogo.svg" />
                                </div>
                                <div className={styles.secondSectionButtonText}>Goodreads rating</div>
                            </button>
                        </div>
                        <EditorTerminal underText='1' height="494px" charsize={146} linenumber="17" info_one={info_one} info_two={info_two} info_three={info_three} tabs={tabs} segments='10' />
                    </div>
                </div>
            </div>
            <div className={styles.secondSection}>
                <div className={styles.secondSectionDiv}>
                    <h2 className={styles.secondSectionTitle} style={{ textAlign: 'left' }}>
                        Flight reports
                    </h2>
                    <p className={styles.secondSectionSubtitle} style={{ margin: '0 0' }}>
                        Hundreds of engineers, including many of our own, have been using GitHub Copilot every day. It's transformed the way they work – here's what they have to say:
                    </p>
                    <div className={styles.secondSectionQuotesGridDiv}>
                        <div className={styles.secondSectionQuotesGrid}>
                            <figure style={{position: 'relative'}}>
                                <span className={styles.secondSectionQuotesQuotes}>“<br /></span>
                                <span className={styles.secondSectionQuotesQuote}>Trying to code in an unfamiliar language by googling everything is like navigating a foreign country with just a phrase book. Using GitHub Copilot is like hiring an interpreter.<br /><br /></span>
                                <a className={styles.secondSectionQuotesAuthor} href="https://github.com/harri-edwards/">Harri Edwards // OpenAI</a>
                            </figure>
                            <figure style={{position: 'relative'}}>
                                <span className={styles.secondSectionQuotesQuotes}>“<br /></span>
                                <span className={styles.secondSectionQuotesQuote}>It surprised me with how precisely it understood my comment and generated accurate suggestions. The ability to choose from 10 different suggestions was the cherry on top.<br /><br /></span>
                                <a className={styles.secondSectionQuotesAuthor} href="https://github.com/Gunnika">Gunnika Batra</a>
                            </figure>
                            <figure style={{position: 'relative'}} className={styles.secondSectionQuotesBig}>
                                <span className={styles.secondSectionQuotesQuotes} >“<br /></span>
                                <span className={styles.secondSectionQuotesBigQuote}>In the first day, GitHub Copilot already taught me about a nuance in Javascript object comparison and is as comfortable with our database schema as I am. This is the single most mind-blowing application of ML I’ve ever seen.<br /><br /></span>
                                <a className={styles.secondSectionQuotesAuthor} href="https://github.com/mikeyk">Mike Krieger // Co-founder, Instagram</a>
                            </figure>
                            <figure style={{position: 'relative'}}>
                                <span className={styles.secondSectionQuotesQuotes}>“<br /></span>
                                <span className={styles.secondSectionQuotesQuote}>I'm impressed by how GitHub Copilot seems to know exactly what I want to type next. GitHub Copilot is particularly helpful when working on React components, where it makes eerily accurate predictions. GitHub Copilot has become an indispensable part of my programmer toolbelt.<br /><br /></span>
                                <a className={styles.secondSectionQuotesAuthor} href="https://github.com/feross">Feross Aboukhadijeh</a>
                            </figure>
                            <figure style={{position: 'relative'}}>
                                <span className={styles.secondSectionQuotesQuotes}>“<br /></span>
                                <span className={styles.secondSectionQuotesQuote}>GitHub Copilot discovered that a test file I was working in was missing a specific test and suggested and wrote the test for me.<br /><br /></span>
                                <a className={styles.secondSectionQuotesAuthor} href="https://github.com/katestud">Kate Studwell // GitHub</a>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondSection;