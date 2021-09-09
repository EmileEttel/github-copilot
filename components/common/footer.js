import Image from "next/image";
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
                        <Image layout="fill" src="/twitterfooterlogo.svg" />
                    </a>
                    <a className={styles.footerRightA} style={{ marginLeft: "4px" }} href="https://www.facebook.com/GitHub">
                        <Image layout="fill" src="/facebookfooterlogo.svg" />
                    </a>
                    <a className={styles.footerRightA} style={{ marginLeft: "4px" }} href="https://www.youtube.com/github">
                        <Image layout="fill" src="/youtubefooterlogo.svg" />
                    </a>
                    <a className={styles.footerRightA} style={{ marginLeft: "4px" }} href="https://www.linkedin.com/company/github">
                        <Image layout="fill" src="/linkdfooterlogo.svg" />
                    </a>
                    <a className={styles.footerRightA} style={{ marginLeft: "4px" }} href="https://github.com/github">
                        <Image layout="fill" src="/githubfooterlogo.svg" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;