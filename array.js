function escolhaUsuario(){
    const escolha = prompt("Escolha: Pedra,Papel ou Tesoura");
    const opcoes = prompt("Pedra, Papel ou Tesoura");
    if(!opcoes.includes(escolha)){
        alert("Opção inválida.Tente outra vez");
        return escolhaUsuario();
    }
return escolha;
}

function escolhaComputador(){
  const opcoes = ["pedra", "papel", "tesoura"] 
  const indice = Math.floor(Math.random() * opcoes.length);
  return opcoes[indice];

}
 
function vencedor(usuario, computador){
    if( usuario === computador){
        return "Empate!";  
    }

    if(
        (usuario === "pedra" && computador === "tesoura")||
        (usuario === "papel" && computador === "pedra") ||
        (usuario === "tesoura" && computador === "ppapel" )
    ){
        return "Você venceu";
    }else{
        return "Computador venceu";
    }
}

function jogar(){
    let continuar = true;

    while(continuar){
        const usuario = escolhaUsuario();
        const computador = escolhaComputador();

        alert("Você escolheu: " + usuario);
        alert("Computador escolheu: " + computador);

        const resultado = vencedor(usuario, computador);
        alert(resultado);
        
        const jogarNovamente = prompt("Deseja jogar novamente? (s/n)").toLowerCase();
        if (jogarNovamente !== "s") {
            continuar = false;
            alert("Obrigado por jogar!");
        }

    }

}
jogar();