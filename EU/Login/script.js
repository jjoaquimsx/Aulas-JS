function logar() {
    var login = document.getElementById(`inome`).value
    var senha = document.getElementById(`ipass`).value

    if (login == `joaquimdaana` && senha == 'sodela') {
        alert(`Deu certo`)
    } else {
        alert(login)
    }
}