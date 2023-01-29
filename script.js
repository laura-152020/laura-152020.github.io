let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

const HomeBtn = document.querySelector('#HomeBtn');
const ContactosBtn = document.querySelector('#ContactosBtn');
const ServiciosBtn = document.querySelector('#ServiciosBtn');
const BlogBtn = document.querySelector('#BlogBtn');
const AcercaBtn = document.querySelector('#AcercaBtn');
const ClientesBtn = document.querySelector('#ClientesBtn');


const homeSection = document.querySelector('#Home');
const aboutSection = document.querySelector('#About');
const ServicesSection = document.querySelector('#Services');
// const homeSection = document.querySelector('#Home');
// const homeSection = document.querySelector('#Home');
// const homeSection = document.querySelector('#Home');


HomeBtn.addEventListener('click', () => {
    window.scrollTo({
        top: homeSection.offsetTop,
        behavior: 'smooth'
    });
});

AcercaBtn.addEventListener('click', () => {
    window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth'
    });
});

productsSection.addEventListener('click', () => {
    window.scrollTo({
        top: ServicesSection.offsetTop,
        behavior: 'smooth'
    });
});