const botao = document.querySelector('.btn-plataforma');
const elementosPlataformas = document.querySelector('.btn-plataforma .plataformas');
/*Isto vai verificar o botao e caso aja um clik vai adicionar a classe 'ativo' senão irá remove-la*/ 
botao.addEventListener('click', ()=>{elementosPlataformas.classList.toggle('ativo')});