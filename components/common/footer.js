import styles from "./Footer.module.css"

function Footer() {

    return (
        <footer className={styles.footerSection}>
            <div className={styles.footerDiv}>
                <div className={styles.footerLeftDiv}>
                    <div style={{ marginRight: "8px" }}>GitHub Inc. © 2021</div>
                    <a className={styles.footerLeftLinks} href="https://docs.github.com/en/github/site-policy/github-terms-of-service">Terms</a>
                    <a className={styles.footerLeftLinks} href="https://docs.github.com/en/github/site-policy/github-privacy-statement">Privacy</a>
                </div>
                <div className={styles.footerRightDiv}>
                    <a className={styles.footerRightA} href="https://twitter.com/github">
                        <img src="/twitterfooterlogo.svg" />
                    </a>
                    <a className={styles.footerRightA} style={{ marginLeft: "4px" }} href="https://www.facebook.com/GitHub">
                        <img src="/facebookfooterlogo.svg" />
                    </a>
                    <a className={styles.footerRightA} style={{ marginLeft: "4px" }} href="https://www.youtube.com/github">
                        <img src="/youtubefooterlogo.svg" />
                    </a>
                    <a className={styles.footerRightA} style={{ marginLeft: "4px" }} href="https://www.linkedin.com/company/github">
                        <img src="/linkdfooterlogo.svg" />
                    </a>
                    <a className={styles.footerRightA} style={{ marginLeft: "4px" }} href="https://github.com/github">
                        <img src="/githubfooterlogo.svg" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;