let paragraph = document.querySelector('#localization')
let i = 0
navigator.geolocation.watchPosition( (position) => {
    paragraph.innerHTML += "</br>" + i + position.coords.latitude + " " + position.coords.longitude
}, (error) => {console.log(error)})