// import 
import { main, hiddenContent, closeBTN } from './main.js'

// variáveis
const equip = document.querySelector('#equipWindow')
const arrows = document.querySelectorAll('#leftArrow, #rightArrow')


export function show() {

    // escondendo conteúdo original
    main.style.display = 'none'
    // mostrando conteúdo oculto
    hiddenContent.style.display = 'flex'

    // mostrando conteúdo desejado
    equip.style.display = "flex"

    // função das setas
    arrows[0].addEventListener('click', switchEquip)
    arrows[1].addEventListener('click', switchEquip)

    // animando com uma classe predefinida
    setTimeout(() => {
        equip.classList.add('sizeUp')
        arrows[0].classList.add('sizeUp')
        arrows[1].classList.add('sizeUp')
        closeBTN.classList.add('sizeUp')
    }, 100)

}

export function hide() {

    // animando com uma classe predefinida
    equip.classList.remove('sizeUp')
    arrows[0].classList.remove('sizeUp')
    arrows[1].classList.remove('sizeUp')
    closeBTN.classList.remove('sizeUp')

    setTimeout(() => {

        // escondendo conteúdo oculto
        hiddenContent.style.display = 'none'
        // mostrando conteúdo original
        main.style.display = 'block'

    }, 1000)

}

var n = 0

function switchEquip() {
    if (this.id == 'leftArrow') {
        if (n == 1) {
            n = 6
        } else {
            n--
        }
    }
    if (this.id == 'rightArrow') {
        if (n == 6) {
            n = 1
        } else {
            n++
        }
    }
    const equipImg = document.querySelector('#equipImg')
    equipImg.src = `./CSS/assets/gymEquip/${n}.jpg`
}