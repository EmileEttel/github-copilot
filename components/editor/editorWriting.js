import { useEffect, useState } from "react";
import EditorCopilot from "./editorCoPilot";


function EditorWriting(props) {
    let segments = parseInt(props.segments)
    let x = 0;
    let allcolors = "";
    let textfull = "";
    while (x < segments) {
        textfull += props.info[x].text
        for (let leg = 0; leg < props.info[x].text.length; leg++) {
            allcolors += props.info[x].color;
            allcolors += ","
        }
        x++;
    }
    let text = textfull.split("")
    let color = allcolors.split(",")
    let i = 0;
    const letters = props.letters
    let key = 0;

    return (
        <>
            <span>
                {text.map((text) => (
                    i++ < letters &&
                    <span key={key++} style={{ color: color[i - 1] }}>
                        {text}
                    </span>
                ))}
            </span>
            <EditorCopilot i={i} letters={letters} info_three={props.info_three} textfull={textfull} />
        </>
    )
}

export default EditorWriting;