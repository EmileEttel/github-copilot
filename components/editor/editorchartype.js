
export default function EditorChartype(tab, setCurrentTab, time, setTimeLeft, test, setTestB, selectTab, setSelectTab, props) {
    if (test == 0 && props.charsize && time < props.charsize[tab] + 20) {
        setTimeout(() => {
            setTimeLeft(time + 1);
        }, 25);
    }
    if (test == 1) {
        if (selectTab == tab) {
            setTimeout(() => {
                setTimeLeft(time + 1);
            }, 25);    
        }
        if (selectTab != tab) {
            setSelectTab(tab);
            setTimeLeft(0);
        }
        setTestB(0);
    }   
}