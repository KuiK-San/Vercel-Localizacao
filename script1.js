const getLocation = () => {
    if(!window.Worker){
        console.error('Worker não permitido')
        return
    }

    let myWorker = new Worker('worker.js')
    let paragraph = document.querySelector('#localization')
    let i = 1

    myWorker.onmessage = (event) => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            paragraph.innerHTML += `<span id=span${i}>${i++}. ${position.coords.latitude} ${position.coords.longitude}</span>`
        })
    }
    document.querySelector('#start').addEventListener('click', () => {
        myWorker.postMessage({comecar: true, parar:false})
    })
    /* document.querySelector('#stop').addEventListener('click', () => {
        myWorker.postMessage({comecar:false, })
    }) */
}

getLocation()