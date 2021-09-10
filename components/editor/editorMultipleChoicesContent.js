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
let lightgrey = "#939da5";
let blue = "#086de6";
let black = "#000"
export const info_one = [[new Info('def ', purple), new Info('max_sum_slice', blue), new Info('(xs):\n    ', black)]];
export const options = [new Info('max_ending = max_so_far = 0\n    for x in xs:\n        max_ending = max(0, max_ending + x)\n       max_so_far = max(max_so_far, max_ending)\n    return max_so_far', lightgrey), new Info('if not xs:\n        return 0\n\n    max_ending = max_slice = 0\n    for x in xs:\n        max_ending = max(0, max_ending + x)\n        max_slice = max(max_slice, max_ending)\n    return max_slice', lightgrey), new Info('max_ending = max_so_far = 0\n    begin = end = 0\n    for i, x in enumerate(xs):\n        if max_ending + x > 0:\n            max_ending += x\n        else:\n            max_ending = 0\n            begin = i\n        if max_ending > max_so_far:\n            max_so_far = max_ending\n            end = i\n    return begin, end, max_so_far', lightgrey), new Info('if not xs:\n        return 0\n\n    current_max = 0\n    max_so_far = 0\n\n    for x in xs:\n        current_max = max(0, current_max + x)\n        max_so_far = max(max_so_far, current_max)\n\n    return max_so_far', lightgrey), new Info('max_sum = 0\n    max_sum_so_far = 0\n    start_index = 0\n    end_index = 0\n    for i in range(len(xs)):\n        max_sum_so_far += xs[i]\n        if max_sum_so_far > max_sum:\n            max_sum = max_sum_so_far\n            start_index = i\n            end_index = i\n        elif max_sum_so_far < 0:\n            max_sum_so_far = 0\n            start_index = i\n        else:\n            end_index = i\n    return (start_index, end_index, max_sum)', lightgrey), new Info('if len(xs) == 0:\n        return None\n\n    max_sum = 0\n    max_sum_index = 0\n    max_sum_slice = []\n\n    for i in range(len(xs)):\n        if sum(xs[:i+1]) > max_sum:\n            max_sum = sum(xs[:i+1])\n            max_sum_index = i\n            max_sum_slice = xs[:i+1]\n\n    return max_sum_slice', lightgrey), new Info('if len(xs) == 0:\n        return 0\n\n    max_sum = 0\n    max_sum_ending_here = 0\n    max_ending_here = 0\n\n    for x in xs:\n        max_ending_here = max(0, max_ending_here + x)\n        max_sum_ending_here = max(max_sum_ending_here, max_ending_here)\n        max_sum = max(max_sum, max_sum_ending_here)\n\n    return max_sum', lightgrey), new Info('best_sum, best_start, best_end = 0, None, None\n\n    for i, x in enumerate(xs):\n        if best_start is None or best_sum < x + best_sum:\n            best_sum = x + best_sum\n            best_start = i\n            best_end = i\n        elif best_sum > x + best_sum:\n            best_sum = x + best_sum\n            best_end = i\n\n    return best_sum, best_start, best_end', lightgrey), new Info('"""\n    Return a tuple (i,j) where i is the index of the first slice with a max value,\n    and j is the index of the slice whose sum is the max\n    """\n\n    if len(xs) == 0:\n        return None\n    elif len(xs) == 1:\n        return (0,0)\n    elif len(xs) == 2:\n        return (0,1) if xs[0] >= xs[1] else (1,0)\n    else:\n        return max_sum_slice_helper(xs,0,len(xs)-1)', lightgrey)];
export const tabs = [new Tabs("./pylogo.svg", 'max_sum_slice.py', 0)];
export const lines = ['6', '9', '13', '12', '17', '15', '14', '13', '14']
export const heights = ['186px', '220px', '310px', '293px', '413px', '355px', '341px', '315px', '340px']
