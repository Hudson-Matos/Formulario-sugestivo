const btnGerarSenha = document.querySelector("#btn_gerar_senha");
const boxSenha = document.querySelector("#box_senha");



function getLetrasMinusculas() {
    return String.fromCharCode(Math.floor(Math.random()*26+97));
}
function getLetrasMaiusculas() {
    return String.fromCharCode(Math.floor(Math.random()*26+65));
}
function getNumeros() {
    return Math.floor(Math.random()*10).toString()
}
function getSimbolos() {
    const simbolos = "!@#$%&*?\|";
    return(simbolos[Math.floor(Math.random()*simbolos.length)]);
}
function getSenhaAleatoria() {
    const lista = [getLetrasMaiusculas,getLetrasMinusculas,getNumeros,getSimbolos]
    const quantChar = 6;
    let senha = "";
    for(let i=0; i<quantChar; i+=4) {
        lista.forEach((indice)=>{senha +=lista[Math.floor(Math.random()*lista.length)]()})
    }
    return senha.slice(0,quantChar);
}


btnGerarSenha.addEventListener("click", () => {
    boxSenha.style.display = "block";
    boxSenha.lastElementChild.innerHTML = getSenhaAleatoria();
})