// imports 

import { show as show360, hide as hide360 } from './view360.js'
import { show as equipShow, hide as EquipHide } from './Equipment.js'
import { show as subsShow, hide as subsHide } from './subs.js'

// variáveis exportadas
export const main = document.getElementsByTagName('main')[0]
export const hiddenContent = document.querySelector('#hidden')
export const closeBTN = document.querySelector('#closeBTN')

// variaveis daqui
const view360 = document.querySelector('#view360')
const equip = document.querySelector('#equip')
const outside = document.querySelector('#closeBTN')
const subs = document.querySelector('#subs')

view360.addEventListener('click', () => {
    if (checkScreen() == true) return
    show360()

    outside.addEventListener('click', () => {
        hide360()
    })
})


equip.addEventListener('click', () => {
    if (checkScreen() == true) return
    equipShow()

    outside.addEventListener('click', () => {
        EquipHide()
    })
})

// esse trecho do código foi dropado
subs.addEventListener('click', () => {
    if (checkScreen() == true) return
    subsShow()

    outside.addEventListener('click', () => {
        subsHide()
    })
})


function checkScreen() {
    if (hiddenContent.style.display == 'flex') return true
}