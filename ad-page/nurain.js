'use strict'

const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')

menuBtn.addEventListener('click' ,function(){
    sideMenu.style.display = 'block'
})
closeBtn.addEventListener('click' ,function(){
    sideMenu.style.display = 'none'
})