// ----API de busca utilizando ViaCEP----
document.getElementById('cep').addEventListener('blur', function () {
    const cepInput = this; // campo onde o usuário digitou o CEP
    const logradouroInput = document.getElementById('logradouro'); // O campo do endereco

    // Pega o valor do CEP e limpa deixando somente números
    const cepLimpo = cepInput.value.replace(/\D/g, '');

    // Verifica se o CEP tem 8 números
    if (cepLimpo.length === 8) {

        // Se tiver 8 números ele começa a buscar o endereço na internet (API ViaCEP)
        fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Problema na resposta da rede');
                }
                return response.json();
            })
            .then(data => {
                if (data.erro) {
                    // Se o ViaCEP disse que este CEP não existe (propriedade "erro: true")
                    alert("CEP não encontrado. Verifique o número digitado.");
                    logradouroInput.value = ""; // Limpa o campo logradouro
                    cepInput.focus(); // Coloca o cursor de volta no campo CEP para correção
                } else {
                    // Se deu tudo certo e o CEP existe
                    logradouroInput.value = data.logradouro; // Coloca o nome da rua no campo "Logradouro"
                }
            })
    } else if (cepLimpo.length > 0) {
        // Se o usuário digitou algo no CEP, mas não são 8 números
        alert("CEP inválido. O CEP deve conter 8 dígitos.");
        logradouroInput.value = ""; // Limpa o campo logradouro
    } else {
        // 6. Se o campo CEP estiver vazio
        logradouroInput.value = ""; // Limpa o campo logradouro também
    }
});

// --------------------------------------------------------------------------------------------------------------------------------------

// ---- Função para carregar os estados ----

const estadoSelect = document.getElementById('estado');
const cidadeSelect = document.getElementById('cidade');
async function carregarEstados() {
    try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        const estados = await response.json();

        estados.sort((a, b) => a.nome.localeCompare(b.nome)); // Ordenar por nome

        estados.forEach(estado => {
            const option = document.createElement('option');
            option.value = estado.id;
            option.textContent = estado.nome;
            estadoSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar os estados:', error);
    }
}

// Função para carregar as cidades com base no estado selecionado
async function carregarCidades(estadoId) {
    try {
        const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios`);
        const cidades = await response.json();

        cidadeSelect.innerHTML = '<option value="">Selecione uma Cidade</option>'; // Limpar opções anteriores

        cidades.forEach(cidade => {
            const option = document.createElement('option');
            option.value = cidade.id;
            option.textContent = cidade.nome;
            cidadeSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar as cidades:', error);
    }
}

// Evento de mudança no campo de seleção de estados
estadoSelect.addEventListener('change', () => {
    const estadoId = estadoSelect.value;
    if (estadoId) {
        carregarCidades(estadoId);
    } else {
        cidadeSelect.innerHTML = '<option value="">Selecione uma Cidade</option>';
    }
});

// Carregar os estados ao carregar a página
carregarEstados();

// --------------------------------------------------------------------------------------------------------------------------------------

// ---- Script Confirmação de Senha ----
document.getElementById('formulario-cliente').addEventListener('submit', function (e) {
    e.preventDefault();

    const senha = document.getElementById('senha').value;
    const confirmar = document.getElementById('confirmar-senha').value;

    if (senha.length < 6) {
        alert("A senha deve conter pelo menos 6 caracteres.");
        return;
    }

    if (senha !== confirmar) {
        alert("As senhas não coincidem.");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    // Removendo this.reset() daqui para que o redirecionamento aconteça
    // e o reset pode ser feito após o redirecionamento ou em outro local se necessário
    // this.reset(); 

    // Chamando a função salvarLogin aqui após validação do formulário
    salvarLogin();
});

const salvarLogin = () => {
    const getEmail = document.getElementById('email').value;
    const getSenha = document.getElementById('senha').value;

    // Utilize chaves específicas para o cliente
    localStorage.setItem("clienteEmail", getEmail);
    localStorage.setItem("clienteSenha", getSenha);
    localStorage.setItem("clienteLogado", "true");
    localStorage.setItem("tipoUsuarioLogado", "cliente"); // Nova chave para o tipo de usuário logado

    window.location.href = "../home/home.html";
}