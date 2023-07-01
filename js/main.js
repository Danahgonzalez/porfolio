const btnHamburguer = document.querySelector('#hamburguer');
const menuMobile = document.querySelector('#menu-mobile');
const btnClose = document.querySelector('#close');
const listItems = document.querySelectorAll('.items');
const porfolioDesign = document.querySelector('#porfolio');

btnHamburguer.addEventListener('click', () =>{
    menuMobile.style.transform = 'translateX(0%)';
});

btnClose.addEventListener('click', () =>{
    menuMobile.style.transform = 'translateX(600px)';
})

listItems.forEach( item =>{
    item.addEventListener('click', () =>{
        menuMobile.style.transform = 'translateX(600px)';
    })
})
