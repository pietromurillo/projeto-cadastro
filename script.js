let clientes =[
    {
        nome:"Lucas",
        idade: 20,
        email: "lucas20@gmail.com"
    },
    {
        nome:"Ana",
        idade: 25,
        email: "ana25@gmail.com"
    },
    {
        nome:"Carlos",
        idade: 30,
        email: "carlosdograu@gmail.com"}
];

function filtrarClientesAdultos(clientes) {
    return clientes.idade >= 18;
}

function mostrarClientesAdultos() {
    let clientesAdultos = clientes.filter(filtrarClientesAdultos);

    let lista = document.getElementById("listaClientesAdultos");

    lista.innerHTML = "";

    for (let i = 0; i < clientesAdultos.length; i++) {
        let item = document.createElement("li");

        item.textContent = clientesAdultos[i].nome + " - " + clientesAdultos[i].idade + " anos - " + clientesAdultos[i].email;
        lista.appendChild(item);
        
    }
}

function cadastrarCliente() {
    let nome = document.getElementById("nomeCliente").value;
    let idade = parseInt(document.getElementById("idadeCliente").value);
    let email = document.getElementById("emailCliente").value;

    if (nome && idade && email) {
        clientes.push({nome: nome, idade: idade, email: email});

        document.getElementById("mensagemCadastro").textContent = "Cliente cadastrado com sucesso!";
        document.getElementById("nomeCliente").value = "";
        document.getElementById("idadeCliente").value = "";
        document.getElementById("emailCliente").value = "";
        }else{
            document.getElementById("mensagemCadastro").textContent = "Preencha todos os campos!";
        }
}