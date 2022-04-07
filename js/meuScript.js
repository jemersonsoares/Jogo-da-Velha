var jogador = null;


reiniciar=function(){
    document.location.reload(true);
   let a=document.getElementsByClassName("quadrado");
   a.innerText="teste";
   console.log(typeof(a));
}


play = function (id) {
    
    let casa = document.getElementById(id);    
    if (isEmpty(casa)) {
        casa.innerText = jogadaDaVez();


        casa.style.color = "#000";
    } else alert(`Você  já clicou na casa ${id}`);

    vencedor();


}

isEmpty = function (elemento) {
    if (elemento.innerText === "-") return true;
    return false;

};
jogadaDaVez = function () {
    if (jogador === null) {
        jogador = "X";
        document.getElementById("jogador").innerText = "0";

    } else {
        if (jogador === "X") {
            jogador = "O";
            document.getElementById("jogador").innerText = "X";
        }
        else {
            jogador = "X";
            document.getElementById("jogador").innerText = "0";
        }
    }

    return jogador;

}

checaVencedor = function () {
    let ganhador = vencedor();
    alert(ganhador);
    if (ganhador) return true;

    return false;

}

vencedor = function () {
    var tabuleiro = new Array(3);
    

    tabuleiro[0] = [document.getElementById("1").innerText, document.getElementById("2").innerText, document.getElementById("3").innerText];
    tabuleiro[1] = [document.getElementById("4").innerText, document.getElementById("5").innerText, document.getElementById("6").innerText];
    tabuleiro[2] = [document.getElementById("7").innerText, document.getElementById("8").innerText, document.getElementById("9").innerText];
    console.table(tabuleiro);

    //analise horizontal    
    if (tabuleiro[0][0] != "-" & tabuleiro[0][0] == tabuleiro[0][1] & tabuleiro[0][0] == tabuleiro[0][2]) {
        console.log("vencedor " + tabuleiro[0][0]);           
        document.getElementById("1").style.background="green";
        document.getElementById("2").style.background="green";
        document.getElementById("3").style.background="green";
        return tabuleiro[0][0];

    }

    if (tabuleiro[1][0] != "-" & tabuleiro[1][0] == tabuleiro[1][1] & tabuleiro[1][0] == tabuleiro[1][2]) {
        console.log("vencedor " + tabuleiro[1][0]);        
        document.getElementById("4").style.background="green";
        document.getElementById("5").style.background="green";
        document.getElementById("6").style.background="green";
        return tabuleiro[1][0];

    }

    if (tabuleiro[2][0] != "-" & tabuleiro[2][0] == tabuleiro[2][1] & tabuleiro[2][0] == tabuleiro[2][2]) {
        console.log("vencedor " + tabuleiro[2][0]);
        document.getElementById("7").style.background="green";
        document.getElementById("8").style.background="green";
        document.getElementById("9").style.background="green";
        return tabuleiro[2][0];

    }

    //analise vertical
    if (tabuleiro[0][0] != "-" & tabuleiro[0][0] == tabuleiro[1][0] & tabuleiro[0][0] == tabuleiro[2][0]) {
        console.log("vencedor " + tabuleiro[0][0]);
        document.getElementById("1").style.background="green";
        document.getElementById("4").style.background="green";
        document.getElementById("7").style.background="green";
        tabuleiro[0][0];

    }
    if (tabuleiro[0][1] != "-" & tabuleiro[0][1] == tabuleiro[1][1] & tabuleiro[0][1] == tabuleiro[2][1]) {
        console.log("vencedor " + tabuleiro[0][1]);
        document.getElementById("2").style.background="green";
        document.getElementById("5").style.background="green";
        document.getElementById("8").style.background="green";
        return tabuleiro[0][1];

    }
    if (tabuleiro[0][2] != "-" & tabuleiro[0][2] == tabuleiro[1][2] & tabuleiro[0][2] == tabuleiro[2][2]) {
        console.log("vencedor " + tabuleiro[0][2]);
        document.getElementById("3").style.background="green";
        document.getElementById("6").style.background="green";
        document.getElementById("9").style.background="green";
        return tabuleiro[0][2];

    }

    //diagonal
    if (tabuleiro[0][0] != "-" & tabuleiro[0][0] == tabuleiro[1][1] & tabuleiro[0][0] == tabuleiro[2][2]) {
        console.log("vencedor " + tabuleiro[0][0]);
        document.getElementById("1").style.background="green";
        document.getElementById("5").style.background="green";
        document.getElementById("9").style.background="green";
        return tabuleiro[0][0];

    }

    if (tabuleiro[0][2] != "-" & tabuleiro[0][2] == tabuleiro[1][1] & tabuleiro[0][2] == tabuleiro[2][0]) {
        console.log("vencedor " + tabuleiro[0][2]);
        document.getElementById("3").style.background="green";
        document.getElementById("5").style.background="green";
        document.getElementById("7").style.background="green";
        return tabuleiro[0][2];

    }


}






vencedor1 = function () {
    var tabuleiro = new Array(3);
    tabuleiro[0] = [document.getElementById("1").innerText, document.getElementById("2").innerText, document.getElementById("3").innerText];
    tabuleiro[1] = [document.getElementById("4").innerText, document.getElementById("5").innerText, document.getElementById("6").innerText];
    tabuleiro[2] = [document.getElementById("7").innerText, document.getElementById("8").innerText, document.getElementById("9").innerText];
    console.table(tabuleiro);

    /*
        /***
         * Linhas horizontais
         */
    if (tabuleiro[0][0] != "-" && (tabuleiro[0][0] == tabuleiro[0][1] && tabuleiro[0][1] == tabuleiro[0][2])) {
        console.log("E o vencedor é : " + tabuleiro[0][0]);

    }

    if (tabuleiro[1][0] != "-" && (tabuleiro[1][0] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[1][2])) {
        console.log("E o vencedor é : " + tabuleiro[1][0]);

    }
    if (tabuleiro[2][0] != "-" && (tabuleiro[2][0] == tabuleiro[2][1] && tabuleiro[2][1] == tabuleiro[2][2])) {
        console.log("E o vencedor é : " + tabuleiro[2][0]);

    }

    /**
    * Linhas verticais
    */
    if (tabuleiro[0][0] != "-" && (tabuleiro[0][0] == tabuleiro[0][1] && tabuleiro[0][1] == tabuleiro[0][2])) {
        console.log("E o vencedor é : " + tabuleiro[0][0]);

    }

    if (tabuleiro[1][0] != "-" && (tabuleiro[1][0] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[1][2])) {
        console.log("E o vencedor é fsdfdsf: " + tabuleiro[1][0]);

    }

    if (tabuleiro[2][0] != "-" && (tabuleiro[2][0] == tabuleiro[2][1] && tabuleiro[2][1] == tabuleiro[2][2])) {
        console.log("E o vencedor é : " + tabuleiro[2][0]);

    }


    /***
     * Diagonal esquerda
     */

    if (tabuleiro[0][0] != "-" && (tabuleiro[0][0] == tabuleiro[1][1] && tabuleiro[0][0] == tabuleiro[2][2])) {
        console.log("E o vencedor é : " + tabuleiro[0][0]);

    }

    /***
     * Diagonal direita
     */
    if (tabuleiro[2][0] != "-" && (tabuleiro[2][0] == tabuleiro[1][1] && tabuleiro[1][1] == tabuleiro[0][2])) {
        console.log("E o vencedor é : " + tabuleiro[2][0]);

    }

}












/*

function valida() {
    document.getElementById("1").innerText = " Olá Silvio";
    let teste = document.getElementById("1");
    teste.style.color = "red";
    teste.addEventListener("click", fuba, false);
    console.log(teste);
    //document.getElementById("nomeProduto").innerText = "* Campo nome não preenchido";
    let todos = document.querySelectorAll("div");
    console.log(todos[0]);

    let quadrado = document.getElementsByClassName("quadrado");
    console.log(quadrado);
    //forEach(x=>{console.log(x)});
    console.log(typeof (quadrado));
    quadrado.forEach(x => { console.log(x) });

    // quadrado.addEventListener("click",fuba,false);

}

function fuba() {
    alert("Fubazeira");
}

*/