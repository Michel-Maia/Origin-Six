// char - caracteres , conjunto de caracteres - string 
// pode usar " " '' ou ``
// number - numeros 
// 1234

// boolean: true ou false
// verdadeiro ou falso

// estrutura de dados { propriedade: 'valor' }
// function liquidificador(frutas) { alert(frutas)}
// liquidificador('maca, banana')

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav.toggle')
//console.log(toggle)



for (const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
    
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

const header = document.querySelector("#header")
const navHeight = header.offHeight

window.addEventListener('scroll', function() {
    if(window.scrollY >= navHeight) {
// scroll é maior igual que a altura do header
        header.classList.add('scroll')
    } else {
// menor que a linha do header 
        header.classList.remove('scroll')
    }
})







