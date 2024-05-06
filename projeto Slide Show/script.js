'use strict';

const imagens = [
    { 'id': '1', 'url': './imagens/chrono.jpg' },
    { 'id': '2', 'url': './imagens/inuyasha.jpg' },
    { 'id': '3', 'url': './imagens/ippo.png' },
    { 'id': '4', 'url': './imagens/tenchi.jpg' },
    { 'id': '5', 'url': './imagens/tenjhotenge.jpg' },
    { 'id': '6', 'url': './imagens/yuyuhakusho.jpg' },
]

const containerItens = document.querySelector('#container-itens')


const loadImagens = (imagens, container) => {
    imagens.forEach(imagens => {
        container.innerHTML += `
            <div class='itens'>
                <img src='${imagens.url}'
            </div>
        `
    })
}

loadImagens(imagens, containerItens);

let itens = document.querySelectorAll('.itens');

const previous = () => {
    containerItens.appendChild(itens[0]);
    itens = document.querySelectorAll('.itens');
}

const next = () => {
    const lastItens = itens[itens.length - 1];
    containerItens.insertBefore(lastItens, itens[0]);
    itens = document.querySelectorAll('.itens');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);