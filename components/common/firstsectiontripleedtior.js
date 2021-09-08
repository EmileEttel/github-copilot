import EditorTerminal from "../editor/editorTerminal";
import styles from "./Firstsection.module.css"

function FirstSectionTripleEditor() {
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
    let purple = "#ba8ef7";
    let blue = "#086de6";
    let lightgrey = "#939da5";
    let black = "#000"
    let pink = "#ff8ad1";
    let green = "#5bec95";
    let yellow = "#986801";
    let grey = "#707a84"
    let orange = "#ffa763";
    const one_info_one = [[new Info ('/**\n * json schema:\n * [\n *   { name: "John Doe",\n *     collaborators: ["Jane Doe", "Herbert Frapp", "Elsie McEwan"]\n *   },\n *   { name: "Jane Doe",\n *     collaborators: ["John Doe", "Karen Smith"]\n *   },\n *   { name: "Skittles the Cat",\n *     collaborators: []\n *   }\n * ]\n */\n', lightgrey)], 0];
    const one_info_two = [[new Info('function ', purple), new Info('collaborators_map', blue), new Info('(json: any): ', black), new Info('Map', blue), new Info('<string, ', black), new Info('Set', blue), new Info('<string>> {', black)], 0];
    const one_info_three = [[new Info ('    const ', purple), new Info('map = ', black), new Info('new ', purple), new Info('Map', blue), new Info('<string, ', black), new Info('Set', blue), new Info('<string>>();\n    ', black), new Info('for ', purple), new Info('(', black), new Info('const ', purple), new Info('item ', black), new Info('of ', purple), new Info('json) {\n      ', black), new Info('const ', purple), new Info('name = item.name;\n      ', black), new Info('const ', purple), new Info('collaborators = item.collaborators;\n      ', black), new Info('const ', purple), new Info('set = ', black), new Info('new ', purple), new Info('Set', blue), new Info('<string>(collaborators);\n      map.', black), new Info('set', blue), new Info('(name, set);\n    }\n    ', black), new Info('return ', purple), new Info('map;\n  }', black)], 0]
    const one_tabs = [new Tabs("/tslogo.svg", "collaborators.go"), new Tabs("/pylogo.svg", "get_repositories.py"), new Tabs("/jslogo.svg", "non_alt_images.js")]
    const two_info_one = [[new Info('interface ', purple), new Info('CommentMarker {\n  ', black), new Info('start', yellow), new Info(': string;\n  ', black), new Info('end', yellow), new Info(': string;\n}\n\n', black), new Info('const ', purple), new Info('markers', yellow), new Info(': { [', black), new Info('language', yellow), new Info(':string]: ', black), new Info('CommentMarker ', blue), new Info('} = {\n')], ];
    const two_info_two = [[new Info('  javascript', yellow), new Info(': { ', black), new Info('start', yellow) , new Info(': ', black), new Info("'//'", green), new Info(', ', black), new Info('end', yellow), new Info(': ', black), new Info("''", green), new Info('},\n  ', black), new Info('python', yellow), new Info(':     { ', black), new Info('start', yellow) , new Info(': ', black), new Info("'#'", green), new Info(', ', black), new Info('end', yellow), new Info(': ', black), new Info("''", green), new Info('},', black)], ];
    const two_info_three = [[new Info('  css', yellow), new Info(':        { ', black), new Info('start', yellow), new Info(': ', black), new Info("'/*'", green), new Info(', ', black), new Info('end', yellow), new Info(': ', black), new Info("'*/'", green), new Info('},\n  ', black), new Info('html', yellow), new Info(':       { ', black), new Info('start', yellow), new Info(': ', black), new Info("'<!--'", green), new Info(', ', black), new Info('end', yellow), new Info(': ', black), new Info("'-->'", green), new Info('},\n  ', black), new Info('bash', yellow), new Info(':       { ', black), new Info('start', yellow), new Info(': ', black), new Info("'#'", green), new Info(', ', black), new Info('end', yellow), new Info(': ', black), new Info("''", green), new Info('},\n  ', black), new Info('postscript', yellow), new Info(': { ', black), new Info('start', yellow), new Info(': ', black), new Info("'%'", green), new Info(', ', black), new Info('end', yellow), new Info(': ', black), new Info("''", green), new Info('},\n  ', black), new Info('cobol', yellow), new Info(':      { ', black), new Info('start', yellow), new Info(': ', black), new Info("'*'", green), new Info(', ', black), new Info('end', yellow), new Info(': ', black), new Info("''", green), new Info('}\n  ', black), new Info('asm', yellow), new Info(':        { ', black), new Info('start', yellow), new Info(': ', black), new Info("';'", green), new Info(', ', black), new Info('end', yellow), new Info(': ', black), new Info("''", green), new Info('},\n  ', black), new Info('haskell', yellow), new Info(':    { ', black), new Info('start', yellow), new Info(': ', black), new Info("'--'", green), new Info(', ', black), new Info('end', yellow), new Info(': ', black), new Info("''", green), new Info('}\n}', black)], ];
    const two_tabs = [new Tabs("/tslogo.svg", "comment_marker.ts"), new Tabs("/rblogo.svg", "course.rb"), new Tabs("/jslogo.svg", "time.js")];
    const three_info_one = [[new Info('def ', purple), new Info('strip_suffix', blue), new Info('(filename):\n    ', black), new Info('"""\n    Removes the suffix from a filename\n    """\n    ', green), new Info('return ', purple), new Info("filename[:filename.rfind('.')]\n\n", black)], 0];
    const three_info_two = [[new Info('def ', purple), new Info('test_strip_suffix', blue), new Info('():', black)], ];
    const three_info_three = [[new Info('    """\n    Tests for the strip_suffix function\n    """\n    ', green), new Info('assert ', purple), new Info('strip_suffix(', black), new Info("'notes.txt'", green), new Info(') == ', black), new Info("'notes'\n    ", green), new Info('assert ', purple), new Info('strip_suffix(', black), new Info("'notes.txt.gz'", green), new Info(') == ', black), new Info("'notes.txt'", green)], ];
    const three_tabs = [new Tabs("/pylogo.svg", "strip_suffix.py"), new Tabs("/rblogo.svg", "gcd.rb"), new Tabs("/jslogo.svg", "count_button.js")];

    return (
        <div className={styles.tripleEditorWhole}>
            <div className={styles.tripleEditorThird}>
                <div className={styles.thirdTextDiv}>
                    <p className={styles.thirdText}>
                        <span className={styles.thirdTextTitle}>Convert comments to code.</span> Write a comment describing the logic you want, and let GitHub Copilot assemble the code for you.
                    </p>
                    <EditorTerminal underText='1' height={["554px"]} charsize={[65]} segments={['7']} linenumber={["24"]} info_one={one_info_one} info_two={one_info_two} info_three={one_info_three} tabs={one_tabs} border="rounded" theme="white" />
                </div>
            </div>
            <div className={styles.tripleEditorThird}>
                <div className={styles.thirdTextDiv}>
                    <EditorTerminal underText='1' height={["457px"]} charsize={[75]} segments={['20']} linenumber={["16"]} info_one={two_info_one} info_two={two_info_two} info_three={two_info_three} tabs={two_tabs} border="rounded" theme="white" />
                    <p className={styles.thirdText}>
                        <span className={styles.thirdTextTitle}>Autofill for repetitive code.</span> GitHub Copilot works great for quickly producing boilerplate and repetitive code patterns. Feed it a few examples and let it generate the rest!
                    </p>
                </div>
            </div>
            <div className={styles.tripleEditorThird}>
                <div className={styles.thirdTextDiv}>
                    <p className={styles.thirdText}>
                        <span className={styles.thirdTextTitle}>Tests without the toil.</span> Tests are the backbone of any robust software engineering project. Import a unit test package, and let GitHub Copilot suggest tests that match your implementation code.
                    </p>
                    <EditorTerminal underText='1' height={["607px"]} charsize={[24]} segments={['3']} linenumber={["12"]} info_one={three_info_one} info_two={three_info_two} info_three={three_info_three} tabs={three_tabs} border="rounded" theme="white" />
                </div>
            </div>
        </div>
    )
}

export default FirstSectionTripleEditor;