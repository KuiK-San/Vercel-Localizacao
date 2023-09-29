self.onmessage = (event) => {
    let tempo = 1000
    var interval
    screen = event.data.screen
    /* if (screen.width < 640 || screen.height < 480){
        tempo = 500
    } */
    if(event.data.onoff){
        var interval = setInterval(() => {
            self.postMessage(true)
        },tempo)
    }
}
