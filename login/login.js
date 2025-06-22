

const registerClient = () => {
    window.location.href = "../cadastro/usuario.html"; 
}

const registerPrestador = () => {
    window.location.href = "../cadastro/prestador.html"; 
}


const validarLoginCliente = () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const getEmail = localStorage.getItem("email");
    const getPassword = localStorage.getItem("senha");
    const getTipo = localStorage.getItem("tipo");

    if (email == getEmail && password == getPassword && getTipo == "cliente") {
        alert("Login realizado com sucesso!");
        localStorage.setItem("logado", "true");
    } 
    else if (email == "" || password == "") {
        alert("Preencha todos os campos!");
        localStorage.setItem("logado", "false");
    }
    else if (getTipo == null || getTipo == "" || getTipo == "prestador") {
        alert("Nenhum usuário cadastrado!");
        localStorage.setItem("logado", "false");
    }
    else if (getTipo == "cliente" && (email != getEmail || password != getPassword)) {
        localStorage.setItem("logado", "false");
        alert("Email ou senha incorretos!");
    }
    else {
        alert("Email ou senha incorretos!");
        localStorage.setItem("logado", "false");
    }
}
const validarLoginPrestador = () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const getEmail = localStorage.getItem("email");
    const getPassword = localStorage.getItem("senha");
    const getTipo = localStorage.getItem("tipo");

    if (email == getEmail && password == getPassword && getTipo == "prestador") {
        alert("Login realizado com sucesso!");
        localStorage.setItem("logado", "true");
    } 
    else if (email == "" || password == "") {
        alert("Preencha todos os campos!");
        localStorage.setItem("logado", "false");
    }
    else if (getTipo == null || getTipo == "" || getTipo == "cliente") {
        alert("Nenhum usuário cadastrado!");
        localStorage.setItem("logado", "false");
    }
    else if (getTipo == "cliente" && (email != getEmail || password != getPassword)) {
        localStorage.setItem("logado", "false");
        alert("Email ou senha incorretos!");
    }
    else {
        alert("Email ou senha incorretos!");
        localStorage.setItem("logado", "false");
    }
}

const logado = localStorage.getItem("logado");

if (logado == "true") {
        window.location.href = "../home/home.html"; 
}  

const acessarCliente = () => {
    window.location.href = "cliente.html";
    localStorage.removeItem("logado");
}

const acessarPrestador = () => {
    window.location.href = "prestador.html";
    localStorage.removeItem("logado");
}