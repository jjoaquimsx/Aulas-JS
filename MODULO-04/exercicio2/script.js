function verificar(){
    var idade = document.getElementById("txtano")
    var data = new Date()
    var anos = data.getFullYear()
    var atual = (idade - anos)

    var resul = document.getElementById("res")
    resul.innerText(atual)

}