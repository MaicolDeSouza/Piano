// Salva na variavel as teclas
// querySelectorAll seleciona todas as teclas da classe oitava e tambem suas divs pois fizemos ".oitava > div"
const teclas = document.querySelectorAll(".oitava > div");
// console.log(teclas);

// Como mouseup e mouseleave executam as mesmas tarefas podemos definir unica função para as 2 chamadas
function desmarcar(tecla) {
    //console.log('desmarcar');
    tecla.classList.remove('selecionada'); // Quando botao for solto removemos a classe que deixa botao verde
}

// Para cada teclas vamos verificar o status das mesmas quando houver click
teclas.forEach((tecla) => {
    // console.log(tecla); Trouxe a div de cada teclas
    tecla.onmousedown = function () {     // Quando botao pressioando executa a função para deixar a tecla verde
        //console.log('mouse down');
        tecla.classList.add('selecionada'); // Quando botao for pressioando incluimos a classe que deixa botao verde
    }
    tecla.onmouseup = () => desmarcar(tecla);    // Quando botao solto vai chamar a função desmarcar passando a tecla
    tecla.onmouseleave = () => desmarcar(tecla); // Quando botao solto vai chamar a função desmarcar passando a tecla

})