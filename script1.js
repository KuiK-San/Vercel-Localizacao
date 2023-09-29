const getLocation = () => {
    if(!window.Worker){
        console.error('Worker não permitido')
        return
    }

    let myWorker = new Worker('worker.js')
    let paragraph = document.querySelector('#localization')
    let i = 1
    let locs = []

    myWorker.onmessage = (event) => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            document.querySelector('#reqs').innerHTML = i
            paragraph.innerHTML += `<span id=span${i}>${i++}. ${position.coords.latitude} ${position.coords.longitude}</span>`
            let coords = `${position.coords.latitude}${position.coords.longitude}`
            if(!locs.includes(coords)){
                locs.push(coords)
                let span = document.querySelector(`#span${i - 1}`)
                span.style.backgroundColor = "#000"
                span.style.color = "#fff"
            }
        })
    }
    document.querySelector('#start').addEventListener('click', () => {
        myWorker.postMessage({onoff: true, screen:{width: screen.width, height: screen.height}})
    })
    document.querySelector('#stop').addEventListener('click', () => {
        myWorker.postMessage({onoff: false, screen:{width: screen.width, height: screen.height}})
    })
}

getLocation()