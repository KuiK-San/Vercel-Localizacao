let paragraph = document.querySelector('#localization')
navigator.geolocation.getCurrentPosition( (position) => {
    paragraph.innerHTML = "Sua localização atual é" +  position.coords.latitude + "+" + position.coords.longitude
})