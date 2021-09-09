import styles from './editor.module.css'
import Image from 'next/dist/client/image';

function ButtonEditor(props) {
    const text = props.title;
    const logo = props.svgpath
    const textColor = props.theme === "white" ? styles.textLight : styles.textDark;
    const svgColor = props.theme === "white" ? styles.svgLight : styles.svgDark;

    return (
        <>
            <div className={styles.divClass}>
                <Image 
                width={props.width}
                height={props.height}
                className={svgColor} 
                src={logo} 
                />
            </div>
            <a className={textColor}>{text}</a>
        </>
    )
}

export default ButtonEditor;