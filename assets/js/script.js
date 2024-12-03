

// Navbar

const dropdown = document.querySelector('#mobile-menu')
const menuBtn = document.querySelector('#menu-button') 

function handleDropdownClick() {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'
}

menuBtn.addEventListener('click', handleDropdownClick)
