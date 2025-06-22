document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('prestador-form');
    // Se não encontrar o formulário, o script para. Evita erros em outras páginas.
    if (!form) {
        return;
    }

    // --- ELEMENTOS DO DOM ---
    const profilePicInput = document.getElementById('profilePicInput');
    const profilePicPreview = document.getElementById('profilePicPreview');
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');
    let fotoPerfilBase64 = null;

    // --- EVENT LISTENERS ---
    form.addEventListener('submit', enviarFormulario);
    profilePicInput.addEventListener('change', carregarPreviaFoto);

    // Listeners para validação em tempo real
    cpfInput.addEventListener('input', () => mascararEValidarCPF(cpfInput));
    telefoneInput.addEventListener('input', () => mascararEValidarTelefone(telefoneInput));

    // Listeners para o CEP
    cepInput.addEventListener('input', () => formatarCep(cepInput));
    cepInput.addEventListener('blur', buscarCep);
    cepInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            buscarCep();
        }
    });

    // --- INICIALIZAÇÃO ---
    carregarEstadosAPI();
    gerenciarCamposEndereco(true);

    // --- FUNÇÕES PRINCIPAIS ---

    function enviarFormulario(event) {
        event.preventDefault();

        if (!validarCPF(cpfInput.value)) {
            alert('O CPF digitado é inválido. Por favor, corrija.');
            cpfInput.focus();
            return;
        }
        if (!validarTelefone(telefoneInput.value)) {
            alert('O Telefone digitado é inválido ou incompleto. Por favor, corrija.');
            telefoneInput.focus();
            return;
        }
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmarSenha').value;
        if (senha !== confirmarSenha || senha.length < 6) {
            alert("As senhas não coincidem ou a senha tem menos de 6 caracteres.");
            return;
        }

        const dados = {
            fotoPerfil: fotoPerfilBase64,
            nome: document.getElementById('nome').value,
            cpf: cpfInput.value.replace(/\D/g, ''),
            data_nascimento: document.getElementById('data_nascimento').value,
            telefone: telefoneInput.value,
            sexo: document.getElementById('sexo').value,
            cep: cepInput.value.replace(/\D/g, ''),
            estado: document.getElementById('estado').value,
            cidade: document.getElementById('cidade').value,
            logradouro: document.getElementById('logradouro').value,
            numero: document.getElementById('numero').value,
            complemento: document.getElementById('complemento').value,
            area_atuacao: document.getElementById('area_atuacao').value,
            descricao: document.getElementById('descricao').value,
            certificacoes: document.getElementById('certificacoes').value,
            email: document.getElementById('email').value,
            senha: senha
        };

        try {
            localStorage.setItem(`cadastro_${dados.cpf}`, JSON.stringify(dados));

            // Utilize chaves específicas para o prestador
            localStorage.setItem("prestadorEmail", dados.email);
            localStorage.setItem("prestadorSenha", dados.senha);
            localStorage.setItem("prestadorLogado", "true");
            localStorage.setItem("tipoUsuarioLogado", "prestador"); // Atualiza a chave para o tipo de usuário logado

            alert('Cadastro realizado com sucesso! Redirecionando para a página principal...');
            form.reset();
            profilePicPreview.src = "../assets/placeholder-image.png";
            gerenciarCamposEndereco(true);

            setTimeout(() => { window.location.href = "../home/home.html"; }, 1000);

        } catch (e) {
            console.error("Erro ao salvar no localStorage:", e);
            alert("Ocorreu um erro ao salvar seu cadastro. O armazenamento do seu navegador pode estar cheio ou desativado. Por favor, tente novamente.");
        }
    }

    function carregarPreviaFoto(event) {
        const file = event.target.files[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) return alert('Por favor, selecione um arquivo de imagem.');
        if (file.size > 2 * 1024 * 1024) return alert('A imagem é muito grande. O limite é de 2MB.');

        const reader = new FileReader();
        reader.onload = () => {
            profilePicPreview.src = reader.result;
            fotoPerfilBase64 = reader.result;
        };
        reader.readAsDataURL(file);
    }

    // --- FUNÇÕES AUXILIARES ---

    async function carregarEstadosAPI() {
        const selectEstado = document.getElementById('estado');
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
            if (!response.ok) throw new Error('Erro de rede');
            const estados = await response.json();
            selectEstado.innerHTML = '<option value="" disabled selected>UF</option>';
            estados.forEach(estado => {
                selectEstado.innerHTML += `<option value="${estado.sigla}">${estado.sigla}</option>`;
            });
        } catch (error) {
            console.error('Falha ao carregar estados:', error);
        }
    }

    function gerenciarCamposEndereco(habilitar) {
        ['logradouro', 'cidade', 'estado'].forEach(id => {
            const campo = document.getElementById(id);
            campo.disabled = !habilitar;
            if (habilitar) campo.value = '';
        });
    }

    function formatarCep(input) {
        let cep = input.value.replace(/\D/g, '');
        cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
        input.value = cep;
        if (input.value === '') {
            gerenciarCamposEndereco(true);
            exibirErroCep('');
        }
    }

    function exibirErroCep(mensagem) {
        document.getElementById('cep-error').textContent = mensagem;
    }

    async function buscarCep() {
        const cep = cepInput.value.replace(/\D/g, '');
        exibirErroCep('');
        if (cep.length !== 8) return;

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            if (!response.ok) throw new Error('Falha na requisição');
            const data = await response.json();

            if (data.erro) {
                exibirErroCep('CEP não encontrado. Preencha o endereço.');
                gerenciarCamposEndereco(true);
                return;
            }

            const logradouroInput = document.getElementById('logradouro');
            const cidadeInput = document.getElementById('cidade');
            const estadoInput = document.getElementById('estado');

            logradouroInput.value = data.logradouro;
            cidadeInput.value = data.localidade;
            estadoInput.value = data.uf;

            logradouroInput.disabled = !!data.logradouro;
            cidadeInput.disabled = !!data.localidade;
            estadoInput.disabled = !!data.uf;

            if (!data.logradouro) logradouroInput.focus();
            else document.getElementById('numero').focus();

        } catch (error) {
            exibirErroCep('Erro ao buscar CEP.');
            gerenciarCamposEndereco(true);
        }
    }

    function mascararEValidarCPF(input) {
        let v = input.value.replace(/\D/g, '');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        input.value = v;
        if (v.replace(/\D/g, '').length < 11) {
            document.getElementById('cpf-error').textContent = '';
        } else {
            validarCPF(v);
        }
    }

    function validarCPF(cpf) {
        const e = document.getElementById('cpf-error');
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
            e.textContent = 'CPF inválido';
            e.style.color = '#d9534f';
            return false;
        }
        let t = 0, r;
        for (let i = 1; i <= 9; i++) t += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        r = (t * 10) % 11;
        if (r === 10 || r === 11) r = 0;
        if (r !== parseInt(cpf.substring(9, 10))) {
            e.textContent = 'CPF inválido';
            e.style.color = '#d9534f';
            return false;
        }
        t = 0;
        for (let i = 1; i <= 10; i++) t += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        r = (t * 10) % 11;
        if (r === 10 || r === 11) r = 0;
        if (r !== parseInt(cpf.substring(10, 11))) {
            e.textContent = 'CPF inválido';
            e.style.color = '#d9534f';
            return false;
        }
        e.textContent = 'CPF válido!';
        e.style.color = '#198754';
        return true;
    }

    function mascararEValidarTelefone(input) {
        let v = input.value.replace(/\D/g, '');
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
        input.value = v;
        validarTelefone(v);
    }

    function validarTelefone(telefone) {
        const e = document.getElementById('telefone-error');
        const t = telefone.replace(/\D/g, '');
        if (t.length === 0) {
            e.textContent = '';
            return false;
        }
        if (t.length >= 10 && t.length <= 11) {
            e.textContent = 'Telefone válido!';
            e.style.color = '#198754';
            return true;
        } else {
            e.textContent = 'Número incompleto.';
            e.style.color = '#d9534f';
            return false;
        }
    }
});