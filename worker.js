// const geolocation = new google.maps.Geolocation();

let intervalo = setInterval(() => {
    console.log('Enviando call')
    self.postMessage(true)
}, 1000)
self.onmessage = (event) => {
    if(event.data){
        console.log('Pedido de parada')
        clearInterval(intervalo)
    }
}