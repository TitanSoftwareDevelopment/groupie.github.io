const remote = require('electron').remote

function closeWin() {
    let w = remote.getCurrentWindow()
    w.close()
}