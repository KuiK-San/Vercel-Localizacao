let paragraph = document.querySelector('#localization')
let i = 1
let arr = []


setInterval(()=>{
    navigator.geolocation.getCurrentPosition((position) => {
        if(i % 50 === 0){
            paragraph.innerHTML = ''
        }
        let novo = `${position.coords.latitude} + ${position.coords.longitude}`
        paragraph.innerHTML += `<span id=span${i}>${i++}. ${position.coords.latitude} ${position.coords.longitude}</span>`
        if(!arr.includes(novo)){
            arr.push(novo)
            let marcelo = document.querySelector(`#span${i - 1}`)
            console.log(marcelo)
            marcelo.style.backgroundColor = "#000"
            marcelo.style.color = "#fff"
        }
    })
},990)
