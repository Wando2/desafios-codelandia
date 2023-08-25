
const buttons = document.querySelectorAll('.tab-options button')
console.log(buttons);

function showitens() {
    console.log('clicou');
    const hiddenItens = document.querySelectorAll('header .hidden')
    const tab = document.querySelector('.tab-options')
    const header = document.querySelector('header')
    const tabOptions = document.querySelector('.tab-options')

    tab.classList.toggle('menuToggle');
    header.classList.toggle('header-extend');

    
    hiddenItens.forEach(item => {
        item.classList.toggle('dp-none');
    });
}

function addEvent(botao) {
    botao.addEventListener('click', showitens);
}

buttons.forEach(addEvent);