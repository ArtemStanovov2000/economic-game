onmessage = function (e) {
    e.data.message = 66
    postMessage(e.data.message * 20)
}