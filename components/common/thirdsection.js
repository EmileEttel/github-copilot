import Image from "next/image";
import styles from "./Thirdsection.module.css"

function ThirdSection() {

    return (
        <section className={styles.thirdSection}>
            <div className={styles.thirdSectionHiwDiv}>
                <div className={styles.thirdSectionHiw}>
                    <h2 className={styles.thirdSectionHiwText}>How it works</h2>
                </div>
                <div className={styles.thirdSectionHiwImage}>
                    <Image layout="fill" className={styles.thirdSectionHiwImg} src="/diagram.png" />
                </div>
            </div>
        </section>
    )
}

export default ThirdSection;