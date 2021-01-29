const campo = document.getElementById("number")

const testarNumero = (n) => {

    let resultado =  n + 1;
    console.log(resultado);
}


campo.addEventListener('change',() => {
  campo = campo.value;
  testarNumero(campo)
})


