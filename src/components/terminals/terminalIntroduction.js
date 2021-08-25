import ButtonTerminal from '../buttons/buttonTerminal'
import styles from './Introduction.module.css'

function TerminalIntroduction() {
    return (
        <div className={styles.terminal}>
            <div className={styles.exampleTabs}>
                <ButtonTerminal svgpath="/tslogo.svg" title="sentiments.ts" />
                <ButtonTerminal svgpath="/gologo.svg" title="write_sql.go" />
                <ButtonTerminal svgpath="/pylogo.svg" title="parse_expenses.py" />
                <ButtonTerminal svgpath="/rblogo.svg" title="addresses.rb" />
            </div>
        </div>
    )
}

export default TerminalIntroduction;