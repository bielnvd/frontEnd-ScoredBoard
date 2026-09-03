const containerP = document.querySelector('.container'), 
h1h = document.querySelector('#h1hh'), //Home
pointsH1 = document.querySelector('#pointsH1'), 
pointsH2 = document.querySelector('#pointsH2'),
pointsH3 = document.querySelector('#pointsH3'),
//Guest
h1g = document.querySelector('#h1g'),
pointsG1 = document.querySelector('#pointsG1'),  
pointsG2 = document.querySelector('#pointsG2'), 
pointsG3 = document.querySelector('#pointsG3'),
guestP = document.querySelector('#guestPoints'),
homeP = document.querySelector('#homePoints')

let homeContador = 0, guestContador = 0

h1h.innerHTML = `HOME` // TITLE TEAM HOME

pointsH1.addEventListener('click', function () {

homeContador++
homeP.innerHTML = `${homeContador}`
})

pointsH2.addEventListener('click', function() {
    homeContador = homeContador + 2
    homeP.innerHTML = `${homeContador}`
    //Home Caixa Incremental de DOIS PONTOS.
})

pointsH3.addEventListener('click', function() {
    homeContador = homeContador + 3
    homeP.innerHTML = `${homeContador}`
    //Home Caixa Incremental de TRÊS PONTOS.
})

h1g.innerHTML = `HEY now`

pointsG1.addEventListener('click', function() {
    guestContador++
    guestP.innerHTML = `${guestContador}`
    //Guest 1 ponto
    
})

pointsG2.addEventListener('click', function() {
    guestContador += 2
    guestP.innerHTML = `${guestContador}`
    //Guest 2 pontos
})

pointsG3.addEventListener('click', function () {
    guestContador += 3
    guestP.innerHTML = `${guestContador}`
    //Guest 3 pontos

})






