import mainContent from './mainPage';
import menu from './menu';
import contacts from './contact';
const content = document.querySelector('#content');
const menuLink = document.querySelector('.gomenu');
const goHomeLink = document.querySelector('.gohome');
const goContactLink = document.querySelector('.gocontact');

let goHome = () => {
    content.innerHTML = "";
    mainContent();
}

let goMenu = () => {
    content.innerHTML = "";
    menu();
}

let goContact = () => {
   content.innerHTML = "";
    contacts();
}

mainContent();

menuLink.addEventListener('click', goMenu);
goHomeLink.addEventListener('click', goHome);
goContactLink.addEventListener('click', goContact);


