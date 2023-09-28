let paragraph = document.querySelector('#localization')
let i = 0


setInterval(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
        paragraph.innerHTML += `</br>${i++}. ${position.coords.latitude} ${position.coords.longitude}`
    })
}, 1000)