import TerminalIntroduction from '../terminals/terminalIntroduction'
import Button from './button'
import styles from './Introduction.module.css'

function Header() {
    return (
        <section className={styles.introductionBackground}>
            <div className={styles.introduction}>
                <div className={styles.header}>
                    <div className={styles.introductionLogo}>
                        <img src="/github-copilot.svg"></img>
                    </div>
                    <Button title="Sign Up" hyperlink="https://github.com/features/copilot/signup"/>
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
                <TerminalIntroduction />
            </div>
        </section>
    )
}

export default Header;