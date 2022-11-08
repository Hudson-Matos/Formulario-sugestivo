const btnGerarSenha = document.querySelector("#btn_gerar_senha");
const senhaGerada = document.querySelector("#senha_gerada");
const cbox1 = document.querySelector("#cbox1");
const cbox2 = document.querySelector("#cbox2");
const cbox3 = document.querySelector("#cbox3");
const slider = document.querySelector("#slider");
const span = document.querySelector("#span");
const btnCopiar = document.querySelector("#btn_copiar")

span.innerHTML = slider.value;
span.value = slider.value;
slider.addEventListener('input', () => {
    span.innerHTML = slider.value;
    span.value = slider.value;
})

const cboxList = [cbox1,cbox2,cbox3] 
cboxList.forEach((item)=>{
    item.addEventListener('click', () => {item.classList.toggle("requerido")})
})

btnGerarSenha.addEventListener("click", (event) => {
    event.preventDefault();
    const requeridosList = [];
    for(const item of cboxList) {
        if(item.classList.contains("requerido")) {
            if(item==cbox1) {requeridosList.push(getLetrasMaiusculas)}
            if(item==cbox2) {requeridosList.push(getNumeros)}
            if(item==cbox3) {requeridosList.push(getSimbolos)}
        }
    }
    senhaGerada.innerHTML = getSenhaAleatoria(requeridosList);
    btnCopiar.innerHTML = "copiar";
    senhaGerada.parentElement.style.display = "block";
})
btnCopiar.addEventListener('click', (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(senhaGerada.innerHTML);
    btnCopiar.innerHTML = "copiado";
})

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
function getSenhaAleatoria(requerimentos) {
    if(!requerimentos.length) return "";
    const quantChar = span.value;
    let senha = "";
    for(let i=0; i<quantChar; i+=requerimentos.length) {
        requerimentos.forEach(()=>{
            senha += requerimentos[Math.floor(Math.random()*requerimentos.length)]()
        })
    }
    return senha.slice(0,quantChar);
}


