let paragraph = document.querySelector('#localization')
let i = 1
let arr = []


let chamador = setInterval(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
        if(i % 50 === 0){
            paragraph.innerHTML = ''
        }
        let q = `${position.coords.latitude} ${position.coords.longitude}`

        const params = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            format: 'json',
            limit: 1,
        }

        const url = new URL('https://nominatim.openstreetmap.org/reverse')
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        fetch(url)
        .then(response => response.json())
        .then(data =>{
            let endereco = data.address.road
            paragraph.innerHTML += `<span id=span${i}>${i++}. ${position.coords.latitude} ${position.coords.longitude} - ${endereco}</span>`
            if(!arr.includes(q)){
                arr.push(q)
                let marcelo = document.querySelector(`#span${i - 1}`)
                marcelo.style.backgroundColor = "#000"
                marcelo.style.color = "#fff"
            }
            console.log(data)
        })
        .catch(error =>{
            paragraph.innerHTML += `<span id=span${i}>${i++}. ${position.coords.latitude} ${position.coords.longitude}</span>`
            if(!arr.includes(q)){
                arr.push(q)
                let marcelo = document.querySelector(`#span${i - 1}`)
                marcelo.style.backgroundColor = "#000"
                marcelo.style.color = "#fff"
            }
        })
        
    })
},10)

document.querySelector('button').addEventListener('click', ()=>{
    clearInterval(chamador)
    console.log('Parou')
})
