let paragraph = document.querySelector('#localization')
navigator.geolocation.watchPosition( (position) => {
    paragraph.innerHTML = position.coords.latitude + " " + position.coords.longitude
})