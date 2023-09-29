self.onmessage = (event) => {
    if(event.data.comecar){
        setInterval(() => {
            self.postMessage(true)
        },500)
    }
}
