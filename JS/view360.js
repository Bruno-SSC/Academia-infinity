// imports
import { main, hiddenContent } from './main.js'

// variáveis
const window360 = document.querySelector('#window360')

export function show() {

    // escondendo conteúdo original
    main.style.display = 'none'
    // mostrando conteúdo oculto
    hiddenContent.style.display = 'flex'

    // animando com uma classe predefinida
    setTimeout(() => {
        window360.classList.add('sizeUp')
        closeBTN.classList.add('sizeUp')

    }, 100)

}

export function hide() {

    // animando com uma classe predefinida
    window360.classList.remove('sizeUp')
    closeBTN.classList.remove('sizeUp')

    setTimeout(() => {

        // escondendo conteúdo oculto
        hiddenContent.style.display = 'none'
        // mostrando conteúdo original
        main.style.display = 'block'

    }, 1000)

}