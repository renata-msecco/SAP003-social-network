import Login from './pages/login.js';
import Cadastro from './pages/cadastro.js';
import Home from './pages/home.js';

let ultimaPagina = '';

/**
 * Função responsável por identificar mudança no hash e chamar a página de acordo
 */
function trocaPagina() {
  switch (window.location.hash) {
    case '#cadastro':
      if (ultimaPagina !== 'cadastro') {
        document.querySelector('main').innerHTML = Cadastro();
        ultimaPagina = 'cadastro';
      }
      break;


    case '#home':
      if (ultimaPagina !== 'home') {
        document.querySelector('main').innerHTML = Home();
        ultimaPagina = 'home';
      }
      break;

    default:
      if (ultimaPagina !== 'login') {
        document.querySelector('main').innerHTML = Login();
        ultimaPagina = 'login';
      }
      break;
  }
}

function init() {
  /* adiciona um observador de eventos que chama o trocaPagina() */
  window.addEventListener('hashchange', trocaPagina);
  /* é necessário chamar a função aqui, para que uma página seja exibida
  na primeira vez que a pessoa entrar no site, pois o hash nesse momento
  nunca foi alterado, então o observador de cima não será ativado */
  trocaPagina();
}

window.addEventListener('load', init);
