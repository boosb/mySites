const phoneButton = document.querySelector('.menu-btn-phone'),
    phoneMenu = document.querySelector('.phone-menu');

function removePhoneMenu() {
    phoneMenu.classList.remove("show");
    phoneButton.classList.remove("menu-active");
    while (phoneButton.firstChild) {
        phoneButton.removeChild(phoneButton.lastChild);
    }
    for (let i = 0; i <= 2; i++) {
        let div = document.createElement('div');
        div.classList.add('menu-btn-phone__elem');
        phoneButton.appendChild(div);
    }
}

phoneMenu.onclick = function () {
    removePhoneMenu();
}

phoneButton.onclick = function () {
    if (phoneButton.classList.contains("menu-active") === false) {
        phoneMenu.classList.add("show");
        phoneButton.classList.add("menu-active");
        while (phoneButton.firstChild) {
            phoneButton.removeChild(phoneButton.lastChild);
        }
        for (let i = 0; i <= 1; i++) {
            let div = document.createElement('div');
            div.classList.add('menu-btn-phone__close');
            phoneButton.appendChild(div);
        }
    } else {
        removePhoneMenu();
    }
}