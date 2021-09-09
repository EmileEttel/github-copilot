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
let pink = "#ff8ad1";
let purple = "#ba8ef7";
let green = "#5bec95";
let yellow = "#e7d564";
let blue = "#89ddff";
let lightgrey = "#939da5";
let grey = "#707a84"
let orange = "#ffa763";
const info_one_one = [new Info('#!/usr/bin/env ts-node\n\n', "#ff8ad1"), new Info('import', "#ba8ef7"), new Info('{ fetch }', "#939da5"), new Info('from', "#ba8ef7"), new Info('"fetch-h2";\n\n', "#5bec95")];
const info_two_one = [new Info('// Determine whether the sentiment of text is positive\n// Use a web service\n', grey), new Info('async function', purple), new Info(' isPositive', yellow), new Info('(text: ', lightgrey), new Info('string', blue), new Info('): ', lightgrey), new Info('Promise', yellow), new Info('<', lightgrey), new Info('boolean', blue), new Info('> {\n', lightgrey)];
const info_three_one = [new Info('  const ', purple), new Info('response = ', lightgrey), new Info('await ', purple), new Info('fetch', yellow), new Info('(', lightgrey), new Info('`http://text-processing.com/api/sentiment/`', green), new Info(', {\n', lightgrey), new Info('    method', orange), new Info(': ', lightgrey), new Info('"POST"', green), new Info(',\n    ', lightgrey), new Info('body', orange), new Info(': ', lightgrey), new Info('`text=', green), new Info('${text}', lightgrey), new Info('`', green), new Info(',\n    ', lightgrey), new Info('headers', orange), new Info(': {\n      ', lightgrey), new Info('"Content-Type"', green), new Info(': ', lightgrey), new Info('"application/x-www-form-urlencoded"', green), new Info(',\n    },\n  });\n  ', lightgrey), new Info('const ', purple), new Info('json = ', lightgrey), new Info('await ', purple), new Info('response.', lightgrey), new Info('json', yellow), new Info('();\n  ', lightgrey), new Info('return ', purple), new Info('json.label === ', lightgrey), new Info('"pos"', green), new Info(';\n}', lightgrey)]
const info_one_two = [new Info('package ', purple), new Info('main\n\n', lightgrey), new Info('type ', purple), new Info('CategorySummary ', lightgrey), new Info('struct ', purple), new Info('{ \n    Title	     ', lightgrey), new Info('string\n    ', purple), new Info('Tasks       ', lightgrey), new Info('int\n    ', purple), new Info('AvgValue    ', lightgrey), new Info('float64\n', purple), new Info('}\n\n', lightgrey), new Info('func ', purple), new Info('createTables', yellow), new Info('(db *sql.DB) {\n    db.Exec(', lightgrey), new Info('"CREATE TABLE tasks (id INTEGER PRIMARY KEY, title TEXT, value INTEGER, category TEXT)"', green), new Info(')\n}\n\n', lightgrey)];
const info_two_two = [new Info('func ', purple), new Info('createCategorySummaries', yellow), new Info('(db *sql.DB) ([]CategorySummary, error) {', lightgrey)];
const info_three_two = [new Info('    var ', purple), new Info('summaries []CategorySummary\n    rows, err := db.Query(', lightgrey), new Info('"SELECT category, COUNT(category), AVG(value) FROM tasks GROUP BY category"', green), new Info(')\n    ', lightgrey), new Info('if ', purple), new Info('err != ', lightgrey), new Info('nil ', orange), new Info('{\n        ', lightgrey), new Info('return ', purple), new Info('nil', orange), new Info(', err\n    }\n    ', lightgrey), new Info('defer ', purple), new Info('rows.Close()\n\n    ', lightgrey), new Info('for ', purple), new Info('rows.Next() {\n        ', lightgrey), new Info('var ', purple), new Info('summary CategorySummary\n        err := rows.Scan(&summary.Title, &summary.Tasks, &summary.AvgValue)\n        ', lightgrey), new Info('if ', purple), new Info('err != ', lightgrey), new Info('nil ', orange), new Info('{\n            ', lightgrey), new Info('return ', purple), new Info('nil', orange), new Info(', err\n        }\n        summaries = ', lightgrey), new Info('append', blue), new Info('(summaries, summary)\n    }\n    ', lightgrey), new Info('return ', purple), new Info('summaries, ', lightgrey), new Info('nil\n', orange), new Info('}')];
const info_one = [info_one_one, info_one_two];
const info_two = [info_two_one, info_two_two];
const info_three = [info_three_one, info_three_two];
const heights = ["494px", "810px"];
const lines = ["17", "30"];
const charsizes = [146, 69];
const segments = [10, 3];
const tabs = [new Tabs("/tslogo.svg", "sentiments.ts", 0), new Tabs("/gologo.svg", "write_sql.go", 1), new Tabs("/pylogo.svg", "parse_expenses.py", 1), new Tabs("/rblogo.svg", "addresses.rb", 1)]

export { info_one, info_two, info_three, heights, lines, charsizes, segments, tabs }