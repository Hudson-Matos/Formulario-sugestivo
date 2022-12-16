const containerAjuste = document.querySelector(".container_ajuste");
const spanSugestivo = document.querySelector("#span_sugestivo");
const btnGerarSenha = document.querySelector("#btn_gerar_senha");
const senhaGerada = document.querySelector("#senha_gerada");
const cbox1 = document.querySelector("#cbox1");
const cbox2 = document.querySelector("#cbox2");
const cbox3 = document.querySelector("#cbox3");
const slider = document.querySelector("#slider");
const span = document.querySelector("#span");
const btnCopiar = document.querySelector("#btn_copiar")
const btnDeletar = document.querySelector(".bi");

spanSugestivo.addEventListener("click", () => {
    containerAjuste.style.display = "flex";
    document.querySelector("body").style.height = "130vh"; })

span.innerHTML = slider.value;
span.value = slider.value;
slider.addEventListener('input', () => {
    span.innerHTML = slider.value;
    span.value = slider.value;
})

const cboxList = [cbox1,cbox2,cbox3] 
cboxList.forEach((item)=>{
    item.addEventListener('click', () => {item.classList.toggle("requerido"); verificarCbox();})
})

btnGerarSenha.addEventListener("click", (event) => {
    event.preventDefault();
    if(verificarCbox()) return;

    document.querySelector("#box_senha").style.display="flex";
    const requeridosList = [];
    for(const item of cboxList) {
        if(item.classList.contains("requerido")) {
            if(item==cbox1) {requeridosList.push(getLetrasMaiusculas)}
            if(item==cbox2) {requeridosList.push(getNumeros)}
            if(item==cbox3) {requeridosList.push(getSimbolos)} } }
    senhaGerada.innerHTML = getSenhaAleatoria(requeridosList);
    btnCopiar.innerHTML = "copiar";
})

btnCopiar.addEventListener('click', (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(senhaGerada.innerHTML);
    btnCopiar.innerHTML = "copiado";
})

btnDeletar.addEventListener("click", ()=>{
    btnDeletar.parentElement.style.display = "none";
    document.querySelector("#box_senha").style.display="none";
    document.querySelector("body").style.height = "100vh";

})

function verificarCbox() {
    const classesRequeridas = [];
    for(const item of cboxList) {
        if(item.classList.contains("requerido")) {
            classesRequeridas.push(item); } }
    if(classesRequeridas.length == 0) {
        cboxList.forEach((item) => {item.parentElement.style.color = "red";} )
        return true; }
    else{
         cboxList.forEach((item)=> {item.parentElement.style.color = "black"; } ) }
}

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
    const simbolos = "!@#$%*?\|";
    return(simbolos[Math.floor(Math.random()*simbolos.length)]);
}
function getSenhaAleatoria(requerimentos) {
    const quantChar = span.value;
    let senha = "";
    for(let i=0; i<quantChar; i+=requerimentos.length) {
        requerimentos.forEach(()=>{
            senha += requerimentos[Math.floor(Math.random()*requerimentos.length)]()
        })
    }
    return senha.slice(0,quantChar);
}


