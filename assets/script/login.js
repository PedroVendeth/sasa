function login(){
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    if(nome == "sasa" && senha == "morceguinho"){
        alert("Bem Vinda de Volta Sasa💖");
        location.href = "principal.html";
    } else{
        alert("Usuário ou Senha Invalidos");
    }
}

function morceguinho(){
    alert("ฅ•ω•ฅ Miiiiiiiaaaaaaaaauuuuuuuuuuuuuuu")
}