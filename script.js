let paragraph = document.querySelector('#localization')
navigator.geolocation.watchPosition( (position) => {
    paragraph.innerHTML += "</br>" + position.coords.latitude + " " + position.coords.longitude
})