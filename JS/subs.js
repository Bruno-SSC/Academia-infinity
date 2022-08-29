// note: dropei essa parte do código porque fazer meu próprio design de plano não tava sendo produtivo.

// import 
import { main, hiddenContent, closeBTN } from './main.js'

// variáveis
const subsWindow = document.querySelector('#subsWindow')
const planos =  document.querySelectorAll('.planos')
const text = document.querySelectorAll('.planos h1, p, span')

export function show() {

    // escondendo conteúdo original
    main.style.display = 'none'
    // mostrando conteúdo oculto
    hiddenContent.style.display = 'flex'

    // mostrando conteúdo desejado
    subsWindow.style.display = "flex"


    // animando com uma classe predefinida
    setTimeout(() => {
        subsWindow.classList.add('sizeUp')
        closeBTN.classList.add('sizeUp')
        planos[0].classList.add('sizeUp')
        planos[1].classList.add('sizeUp')
    }, 100)

}

export function hide() {

    // animando com uma classe predefinida
    subsWindow.classList.remove('sizeUp')
    closeBTN.classList.remove('sizeUp')
    planos[0].classList.remove('sizeUp')
    planos[1].classList.remove('sizeUp')

    setTimeout(() => {

        // escondendo conteúdo oculto
        hiddenContent.style.display = 'none'
        // mostrando conteúdo original
        main.style.display = 'block'

    }, 1000)

}
