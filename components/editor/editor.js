import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import styles from './Editor.module.css'
import EditorLine from './editorLine';
import EditorWriting from './editorWriting';

function Editor(props) {
    const theme = props.theme === "dark" ? styles.lightTheme : styles.darkTheme;
    let sentence = "Joe mama"
    let test = sentence.split("");
    let key = 0;

    return (
        <div className={`${styles.wholeArea} + ${theme}`}>
            <EditorLine linenumber={props.linenumber} />
            <div className={styles.textArea}>
                {props.info_one.map((info) => (
                    <span key={key++} style={{ color: info.color }}>{info.text}</span>
                ))}
                <EditorWriting info={props.info_two} segments='10' info_three={props.info_three} letters={props.letters}/>
            </div>
        </div>
    )
}

export default Editor;