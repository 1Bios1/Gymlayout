import './sass/style.scss'

const dropdownBtn = document.getElementById('dropdown-btn') 
const dropdownMenu = document.getElementById('dropdown-menu')

dropdownBtn.addEventListener('click', function(elem) {

    this.classList.toggle('clicked')

    dropdownMenu.classList.toggle('opened')

})
