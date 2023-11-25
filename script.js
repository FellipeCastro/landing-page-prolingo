//Modal Certificado
const certificadoLink = document.getElementById("certificado-link");
const modalCertificado = document.getElementById("modal-certificado");
const certificadoFade = document.getElementById("fade-certificado");
certificadoLink.addEventListener('click', () => {
    modalCertificado.classList.remove('hide');
    certificadoFade.addEventListener('click', () => {
        modalCertificado.classList.add('hide');
    });
});

//Prices
const paragrafoPrices = document.querySelectorAll('.paragrafo-prices');
const btnPrices = document.querySelectorAll('.prices-btn');
btnPrices.forEach((btn) => {
    btn.addEventListener('click', () => {
        const position = Array.from(btnPrices).indexOf(btn);
        paragrafoPrices[position].classList.toggle('hide');

        const isHide = paragrafoPrices[position].classList.contains('hide');
        if(isHide) {
            btn.innerHTML = `View more <i class="fa-solid fa-caret-down"></i>`;
        } else {
            btn.innerHTML = `View less <i class="fa-solid fa-caret-up"></i>`;
        };
    });
});

//Course Modules
listaModulos.forEach((modulo, posicao) => {
    const card = document.createElement('li');
    card.innerHTML = `
        <img src="${modulo.img}" alt="Módolo ${posicao}">
        <h3>
            ${modulo.titulo}
        </h3>
        <button onclick="openModal(${posicao})">View More</button>
    `;

    document.querySelector('#courses-modulos-list').appendChild(card);
});

const card = document.getElementById('modal-card');
const tituloCard = document.getElementById('card-titulo');
const imgCard = document.getElementById('card-img');
const paragrafoCard = document.getElementById('card-paragrafo');
const cardFade = document.getElementById("fade-card");

function openModal(posicao) {
    tituloCard.innerHTML = listaModulos[posicao].titulo;
    imgCard.src = listaModulos[posicao].img;
    paragrafoCard.innerText = listaModulos[posicao].descricao;
    card.classList.remove('hide');
    cardFade.addEventListener('click', () => {
        card.classList.add('hide');
    });

};

//Login
const icon = document.getElementById('icon')
const login = document.getElementById('login');
const loginFade = document.getElementById('login-fade');
icon.addEventListener('click', () => {
    login.classList.remove('hide');
    loginFade.addEventListener('click', () => {
        login.classList.add('hide');
    });
});

//Menu hambúrger
/*const nav = document.getElementById('nav');
const navLink = document.getElementsByClassName('nav-link');
const menuBtn = document.getElementById('hamburger-menu');
menuBtn.addEventListener('click', () => {
    nav.classList.add('hamburger-menu')
    nav.classList.remove('hide')
    nav.classList.remove('menu')
    menuBtn.innerHTML = `
        <i class="fa-solid fa-xmark"></i>
    `

    menuBtn.addEventListener('click', () => {
        menuBtn.innerHTML =  `
        <i class="fa-solid fa-bars"></i>
        `
        nav.classList.remove('hamburger-menu')
        nav.classList.add('hide')
        nav.classList.add('menu')
    })
});*/

const nav = document.getElementById('nav');
const navLinks = document.getElementsByClassName('nav-link');
const menuBtn = document.getElementById('hamburger-menu');

menuBtn.addEventListener('click', () => {
    if (nav.classList.contains('hamburger-menu')) {
        // Se a classe 'hamburger-menu' estiver presente, remove-a e restaura as classes originais
        menuBtn.innerHTML = `
            <i class="fa-solid fa-bars"></i>
        `;
        nav.classList.remove('hamburger-menu');
        nav.classList.add('hide');
        nav.classList.add('menu');
    } else {
        // Se a classe 'hamburger-menu' não estiver presente, adiciona-a e ajusta as classes
        menuBtn.innerHTML = `
            <i class="fa-solid fa-xmark"></i>
        `;
        nav.classList.add('hamburger-menu');
        nav.classList.remove('hide');
        nav.classList.remove('menu');
    }
});

// Itera sobre cada elemento da coleção 'navLinks'
for (const navLink of navLinks) {
    navLink.addEventListener('click', () => {
        menuBtn.innerHTML = `
            <i class="fa-solid fa-bars"></i>
        `;
        nav.classList.remove('hamburger-menu');
        nav.classList.add('hide');
        nav.classList.add('menu');
    });
}
