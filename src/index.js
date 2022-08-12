import doForm from './js/script.js';
import './styles/normalize.css';
import './styles/soft-reset.css';
// import './styles/style.css';
import './scss/style.scss'

const form = document.forms.contact;
form.addEventListener("submit", doForm);