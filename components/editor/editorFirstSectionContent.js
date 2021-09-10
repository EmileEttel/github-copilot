class Info {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
}
class Tabs {
    constructor(imgsrc, text, tabnum) {
        this.text = text;
        this.imgsrc = imgsrc;
        this.tabnum = tabnum;
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
const info_one = [[new Info('package ', purple), new Info('main\n\n', black), new Info('type ', purple), new Info('Run ', black), new Info('struct ', purple), new Info('{\n    Time ', black), new Info('int ', purple), new Info('// in milliseconds\n    ', lightgrey), new Info('Results ', black), new Info('string\n    ', purple), new Info('Failed ', black), new Info('bool\n', purple), new Info('}\n\n', black)], 0];
const info_two = [[new Info('// Get average runtime of successful runs in seconds\n', lightgrey), new Info('func ', purple), new Info('averageRuntimeInSeconds', blue), new Info('(runs []Run) ', black), new Info('float64 ', blue), new Info('{', black)], 0];
const info_three = [[new Info('    var ', purple), new Info('totalTime ', black), new Info('int\n    ', purple), new Info('var ', purple), new Info('failedRuns ', black), new Info('int\n    for ', purple), new Info('_, run := ', black), new Info('range ', purple), new Info('runs {\n        ', black), new Info('if ', purple), new Info('run.Failed {\n                failedRuns++\n            } ', black), new Info('else ', purple), new Info('{\n                totalTime += run.Time\n            }\n        }\n\n            averageRuntime := ', black), new Info('float64', purple), new Info('(totalTime) / ', black), new Info('float64', purple), new Info('(len(runs) - failedRuns) / ', black), new Info('1000\n    ', yellow), new Info('return ', purple), new Info('averageRuntime\n}', black)], 0];
const tabs = [new Tabs("/gologo.svg", "runtime.go", 0), new Tabs("/jslogo.svg", "days_between_dates.js", 0), new Tabs("/gologo.svg", "server.go", 0)]

export { info_one, info_two, info_three, tabs}