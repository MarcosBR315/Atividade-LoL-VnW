const input1 = document.querySelector(".input_1");
const input2 = document.querySelector(".input_2");
const botao = document.querySelector(".btn_entrar")

console.log(botao);

function habilitar(){
    if(input1.value && input2.value.lenght >= 8){
        botao.removeAttribute("disabled");
    }else{
        botao.setAttribute("disabled", "disabled");
    }
}

input1.addEventListener("input", habilitar);
input2.addEventListener("input", habilitar);