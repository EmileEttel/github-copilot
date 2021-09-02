import { useState } from "react";
import EditorTerminal from "./editorTerminal";
import styles from "./Mac.module.css"

function EditorMultipleChoices() {
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
    const [option, setOptionNbr] = useState(0)
    let purple = "#ba8ef7";
    let lightgrey = "#939da5";
    let blue = "#086de6";
    let black = "#000"
    const info_one = [new Info('def ', purple), new Info('max_sum_slice', blue), new Info('(xs):\n    ', black)];
    const options = [new Info('max_ending = max_so_far = 0\n    for x in xs:\n        max_ending = max(0, max_ending + x)\n       max_so_far = max(max_so_far, max_ending)\n    return max_so_far', lightgrey), new Info('if not xs:\n        return 0\n\n    max_ending = max_slice = 0\n    for x in xs:\n        max_ending = max(0, max_ending + x)\n        max_slice = max(max_slice, max_ending)\n    return max_slice', lightgrey), new Info('max_ending = max_so_far = 0\n    begin = end = 0\n    for i, x in enumerate(xs):\n        if max_ending + x > 0:\n            max_ending += x\n        else:\n            max_ending = 0\n            begin = i\n        if max_ending > max_so_far:\n            max_so_far = max_ending\n            end = i\n    return begin, end, max_so_far', lightgrey), new Info('if not xs:\n        return 0\n\n    current_max = 0\n    max_so_far = 0\n\n    for x in xs:\n        current_max = max(0, current_max + x)\n        max_so_far = max(max_so_far, current_max)\n\n    return max_so_far', lightgrey), new Info('max_sum = 0\n    max_sum_so_far = 0\n    start_index = 0\n    end_index = 0\n    for i in range(len(xs)):\n        max_sum_so_far += xs[i]\n        if max_sum_so_far > max_sum:\n            max_sum = max_sum_so_far\n            start_index = i\n            end_index = i\n        elif max_sum_so_far < 0:\n            max_sum_so_far = 0\n            start_index = i\n        else:\n            end_index = i\n    return (start_index, end_index, max_sum)', lightgrey), new Info('if len(xs) == 0:\n        return None\n\n    max_sum = 0\n    max_sum_index = 0\n    max_sum_slice = []\n\n    for i in range(len(xs)):\n        if sum(xs[:i+1]) > max_sum:\n            max_sum = sum(xs[:i+1])\n            max_sum_index = i\n            max_sum_slice = xs[:i+1]\n\n    return max_sum_slice', lightgrey), new Info('if len(xs) == 0:\n        return 0\n\n    max_sum = 0\n    max_sum_ending_here = 0\n    max_ending_here = 0\n\n    for x in xs:\n        max_ending_here = max(0, max_ending_here + x)\n        max_sum_ending_here = max(max_sum_ending_here, max_ending_here)\n        max_sum = max(max_sum, max_sum_ending_here)\n\n    return max_sum', lightgrey), new Info('best_sum, best_start, best_end = 0, None, None\n\n    for i, x in enumerate(xs):\n        if best_start is None or best_sum < x + best_sum:\n            best_sum = x + best_sum\n            best_start = i\n            best_end = i\n        elif best_sum > x + best_sum:\n            best_sum = x + best_sum\n            best_end = i\n\n    return best_sum, best_start, best_end', lightgrey), new Info('"""\n    Return a tuple (i,j) where i is the index of the first slice with a max value,\n    and j is the index of the slice whose sum is the max\n    """\n\n    if len(xs) == 0:\n        return None\n    elif len(xs) == 1:\n        return (0,0)\n    elif len(xs) == 2:\n        return (0,1) if xs[0] >= xs[1] else (1,0)\n    else:\n        return max_sum_slice_helper(xs,0,len(xs)-1)', lightgrey)];
    const tabs = [new Tabs("./pylogo.svg", 'max_sum_slice.py')];
    const lines = ['6', '9', '13', '12', '17', '15', '14', '13', '14']
    const heights = ['186px', '220px', '310px', '293px', '413px', '355px', '341px', '315px', '340px']

    if (option < 0) {
        setOptionNbr(8);
    }
    if (option > 8) {
        setOptionNbr(0);
    }
    info_one[4] = options[option];
    return (
        <div className={styles.editorArea}>
            <div className={styles.editorWindow}>
                <div className={styles.editorMacBar}>
                    <div className={styles.redCircle}></div>
                    <div className={styles.yellowCircle}></div>
                    <div className={styles.greenCircle}></div>
                    <div className={styles.editorMacBarText}>Visual Studio Code</div>
                </div>
                <div className={styles.editorTextArea}>
                    <div className={styles.editorSidebar}>
                        <div className={styles.editorSidebarTop}>
                            <div>
                                <img src="/vsfilelogo.svg" className={styles.editorSidebarSvgTop} />
                            </div>
                            <div>
                                <img src="/vssearchlogo.svg" className={styles.editorSidebarSvgTop} />
                            </div>
                            <div>
                                <img src="/vsgithublogo.svg" className={styles.editorSidebarSvgTop} />
                            </div>
                            <div>
                                <img src="/vsdebuglogo.svg" className={styles.editorSidebarSvgTop} />
                            </div>
                            <div>
                                <img src="/vsextensionlogo.svg" className={styles.editorSidebarSvg} />
                            </div>
                        </div>
                        <div className={styles.editorSidebarBottom}>
                            <div>
                                <img src="/vsprofilelogo.svg" className={styles.editorSidebarSvg} />
                            </div>
                            <div>
                                <img src="/vssettingslogo.svg" className={styles.editorSidebarSvgBot} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.editorEditorDiv}>
                        <div style={{ width: '0px' }}>
                            <div className={styles.multipleChoicesDiv}>
                                <button className={styles.multipleChoicesButton} onClick={() => setOptionNbr(option + 1)}>
                                    <span>Next</span>
                                    <span className={styles.multipleChoicesChar}>⌥]</span>
                                </button>
                                <div className={styles.multipleChoicesDivider} />
                                <button className={styles.multipleChoicesButton} onClick={() => setOptionNbr(option - 1)}>
                                    <span>Previous</span>
                                    <span className={styles.multipleChoicesChar}>⌥]</span>
                                </button>
                                <div className={styles.multipleChoicesDivider} />
                                <button className={styles.multipleChoicesButton}>
                                    <span>Accept</span>
                                    <span className={styles.multipleChoicesChar}>Tab</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <EditorTerminal underText='0' height={heights[option]} segments='0' linenumber={lines[option]} info_one={info_one} tabs={tabs} border="square" theme="white" />
                </div>
                <div className={styles.editorBottomBar}>
                    <div className={styles.editorBottomBarContent} style={{ width: '100%' }} >
                        <div className={styles.editorBottomBarSvgDiv}>
                            <img src="/bottomgithublogo.svg" className={styles.editorBottomBarSvg} />
                        </div>
                        main
                    </div>
                    <div className={styles.editorBottomBarCopilot}>
                        <img src="/copilottag.svg" className={styles.editorBottomBarCopilotSvg} />
                    </div>
                    <div className={styles.editorBottomBarLocator}>
                        Ln 23 Col, 1
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorMultipleChoices;