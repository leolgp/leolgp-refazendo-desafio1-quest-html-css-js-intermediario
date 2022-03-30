const imagens = document.querySelectorAll(".quadro")
//peguei nodeList(4) lista com 4 objetos são os 4 quadros

let setaVoltar = document.getElementById('esquerda')
let setaAvancar = document.getElementById('direita')

let imagemAtual = 0;
setaVoltar.classList.add('apagada')
    const totalDeImagens = imagens.length ;

function esconderImagens(){
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
        console.log(imagem.classList);
    });
}

function mostrarImagem(){
        imagens[imagemAtual].classList.add('mostrar')
    }
 

    setaAvancar.addEventListener('click', function(){
        const totalDeImagens = imagens.length - 1;

    if(imagemAtual === totalDeImagens - 1) {
        setaAvancar.classList.add('apagada');
    }

    if(imagemAtual === totalDeImagens) {
        return;
    }
    setaVoltar.classList.remove('apagada')
    imagemAtual++;
    esconderImagens()
    mostrarImagem()
});


setaVoltar.addEventListener('click', function(){

if(imagemAtual === 1) {
    setaVoltar.classList.add('apagada');
}

if(imagemAtual === 0) {
    return;
}
setaAvancar.classList.remove('apagada')

imagemAtual--;
esconderImagens()
mostrarImagem()
});



