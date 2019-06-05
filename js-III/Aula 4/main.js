let fotografias = [
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic01.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic02.jpg',
        titulo: 'skate',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic03.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic04.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://github.com/reprograma',
        imagem: 'images/pic05.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },
    {
        url: 'https://youtu.be/s6zR2T9vn2c',
        imagem: 'images/pic06.jpg',
        titulo: 'Nascetur nunc varius commodo',
        descricao: 'Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.'
    },

]

const createCard = (lista) => {
    return lista.map((item) => {
        return (
        `
        <div class="box">
        <img src=${item.imagem} alt="" class="image fit" />
        <div class="inner">
            <h3>${item.titulo}</h3>
            <p>${item.descricao}
            </p>
            <a href=${item.url} class="button fit" data-poptrox="youtube,800x400">Watch</a>
        </div>
        </div>
        ` 
        )
}).join(""); //troca o separador por outro separador que você queira
};

document.querySelector('#cards').innerHTML += createCard(fotografias);

const inputValue = document.querySelector('input').value;
const button = document.querySelector('button');
