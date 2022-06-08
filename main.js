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

