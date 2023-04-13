$(document).ready(function(){
    console.log (document.querySelector('header button'));
})

/* 
Representamos o jQuerry através do $
dentro do () informamos o seletor, nesse caso foi o document
Basicamente o que esta sendo dito é: quando meu documento 
estiver pronto, execute esse console.log
caso eu queria selecionar o botao de "Nova imagem +"
*/

$(document).ready(function(){
    console.log ($('#btn-cancel'));
})

/*
Entao nesse exmplo eu to pegando o botao do HTML 
utilizando $(#btn-cancel) e colocando dentro de um console.log 
*/

$(document).ready(function(){
    $('header button').click(function (){
        $('form').slideDown(); //efeito de slide, mas antes, é necessario add "display:none" ao css
    })

    $('#btn-cancel').click(function(){
        $('form').slideUp(); //efeito de quando clicar em "cancelar" o slide sobe.
    })

    $('form').on('submit', function(e){
        console.log("submit");
        e.preventDefault();
    })
})