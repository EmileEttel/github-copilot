import Button from "./button";
import styles from "./Dontflysolo.module.css"

function DontFlySolo() {
    const h2Text = "Don't fly solo."

    return (
        <section className={styles.dfsSection}>
            <div className={styles.dfsDiv}>
                <div className={styles.dfsImgDiv}>
                    <img style={{ width: "100%" }} src="/head.png" />
                </div>
                <h2 className={styles.dfsText}>{h2Text}</h2>
                <Button title="Sign up for the technical preview" color="white" hyperlink="https://github.com/features/copilot/signup" />
            </div>
        </section>
    )
}

export default DontFlySolo;