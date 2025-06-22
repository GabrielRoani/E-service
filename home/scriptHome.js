// No script da home.html

// Objeto 'perfis' com os dados dos prestadores (copie todo o conteúdo deste objeto para cá)
const perfis = {
    Diarista: [
        {
            nome: "Maria das Dores",
            tempo: "8 anos",
            classif: 5.0,
            img: "../assets/Diarista/Diarista1.jpg", // AJUSTE O CAMINHO DA IMAGEM SE NECESSÁRIO
            avaliacoes: [
                {
                    nome: "Ana L.",
                    texto: "\"A Maria é extremamente caprichosa, deixou minha casa impecável. Muito educada e pontual.\"",
                    img: "../assets/Diarista/Aval1.jpg" // AJUSTE O CAMINHO DA IMAGEM
                },
                {
                    nome: "Henrique M.",
                    texto: "\"Já contratei várias vezes e sempre fico satisfeita. Confiável e detalhista.\"",
                    img: "../assets/Diarista/Aval2.jpg" // AJUSTE O CAMINHO DA IMAGEM
                }
            ]
        },
        {
            nome: "Luciana Ribeiro",
            tempo: "5 anos",
            classif: 4.6,
            img: "../assets/Diarista/Diarista2.jpg",
            avaliacoes: [
                {
                    nome: "Cláudia S.",
                    texto: "\"Muito organizada e prestativa. Limpou tudo com muita atenção aos detalhes.\"",
                    img: "../assets/Diarista/Aval3.jpg"
                },
                {
                    nome: "Paulo C.",
                    texto: "\"Gostei do serviço, só atrasou um pouco no horário combinado.\"",
                    img: "../assets/Diarista/Aval4.jpg"
                }
            ]
        },
        {
            nome: "Adriana Nogueira",
            tempo: "9 anos",
            classif: 4.9,
            img: "../assets/Diarista/Diarista3.jpg",
            avaliacoes: [
                {
                    nome: "Fabiana T.",
                    texto: "\"Simplesmente excelente! Já virou minha diarista fixa.\"",
                    img: "../assets/Diarista/Aval5.jpg"
                },
                {
                    nome: "Bruno R.",
                    texto: "\"Caprichosa e muito simpática. Recomendo de olhos fechados.\"",
                    img: "../assets/Diarista/Aval6.jpg"
                }
            ]
        }
    ],
    Marceneiro: [
        {
            nome: "João Batista Ferreira",
            tempo: "15 anos",
            classif: 5.0,
            img: "../assets/Marceneiro/Marceneiro1.jpg",
            avaliacoes: [
                {
                    nome: "Renata M.",
                    texto: "\"Fez um armário sob medida maravilhoso. Entregou antes do prazo!\"",
                    img: "../assets/Marceneiro/Aval1.jpg"
                },
                {
                    nome: "Daniela S.",
                    texto: "\"Excelente acabamento, só achei o preço um pouco salgado.\"",
                    img: "../assets/Marceneiro/Aval2.jpg"
                }
            ]
        },
        {
            nome: "Felipe Andrade",
            tempo: "11 anos",
            classif: 4.5,
            img: "../assets/Marceneiro/Marceneiro2.jpg",
            avaliacoes: [
                {
                    nome: "Gabriela V.",
                    texto: "\"Os móveis ficaram bonitos, mas houve um pequeno atraso na entrega.\"",
                    img: "../assets/Marceneiro/Aval3.jpg"
                },
                {
                    nome: "Leandro P.",
                    texto: "\"Bom acabamento e usou material de qualidade.\"",
                    img: "../assets/Marceneiro/Aval4.jpg"
                }
            ]
        },
        {
            nome: "Wellington Cruz",
            tempo: "6 anos",
            classif: 4.8,
            img: "../assets/Marceneiro/Marceneiro3.jpg",
            avaliacoes: [
                {
                    nome: "Janaína L.",
                    texto: "\"Ótimo profissional, fez exatamente como pedi. Recomendo muito!\"",
                    img: "../assets/Marceneiro/Aval5.jpg"
                },
                {
                    nome: "Célio D.",
                    texto: "\"Superou minhas expectativas, trabalho bem feito e pontual.\"",
                    img: "../assets/Marceneiro/Aval6.jpg"
                }
            ]
        }
    ],
    Eletricista: [
        {
            nome: "Carlos Henrique Souza",
            tempo: "12 anos",
            classif: 5.0,
            img: "../assets/Eletricista/Eletricista1.jpg",
            avaliacoes: [
                {
                    nome: "Júlio T.",
                    texto: "\"Resolveu um problema antigo na fiação que ninguém conseguia. Muito profissional!\"",
                    img: "../assets/Eletricista/Aval1.jpg"
                },
                {
                    nome: "Luciana P.",
                    texto: "\"Trabalho limpo, explicou tudo direitinho. Recomendo!\"",
                    img: "../assets/Eletricista/Aval2.jpg"
                }
            ]
        },
        {
            nome: "Daniel Oliveira",
            tempo: "9 anos",
            classif: 4.9,
            img: "../assets/Eletricista/Eletricista2.jpg",
            avaliacoes: [
                {
                    nome: "Thaís C.",
                    texto: "\"Muito ágil e cuidadoso com os equipamentos. Serviço limpo!\"",
                    img: "../assets/Eletricista/Aval3.jpg"
                },
                {
                    nome: "Rodrigo F.",
                    texto: "\"Passou muita segurança no que faz. Profissional de confiança.\"",
                    img: "../assets/Eletricista/Aval4.jpg"
                }
            ]
        },
        {
            nome: "Rafael Martins",
            tempo: "6 anos",
            classif: 4.6,
            img: "../assets/Eletricista/Eletricista3.jpg",
            avaliacoes: [
                {
                    nome: "Simone R.",
                    texto: "\"Bom eletricista, resolveu tudo rapidinho. Só achei caro.\"",
                    img: "../assets/Eletricista/Aval5.jpg"
                },
                {
                    nome: "Gustavo A.",
                    texto: "\"Explicou tudo e ainda sugeriu melhorias na instalação.\"",
                    img: "../assets/Eletricista/Aval6.jpg"
                }
            ]
        }
    ],
    Encanador: [
        {
            nome: "Roberto Lima",
            tempo: "10 anos",
            classif: 4.4,
            img: "../assets/Encanador/Encanador1.jpg",
            avaliacoes: [
                {
                    nome: "Silvia G.",
                    texto: "\"Serviço rápido e eficiente. Resolveu o vazamento na hora.\"",
                    img: "../assets/Encanador/Aval1.jpg"
                },
                {
                    nome: "Fábio R.",
                    texto: "\"Bom profissional, mas chegou com um pouco de atraso.\"",
                    img: "./assets/Encanador/Aval2.jpg"
                }
            ]
        },
        {
            nome: "Edson Pereira",
            tempo: "14 anos",
            classif: 4.7,
            img: "../assets/Encanador/Encanador2.jpg",
            avaliacoes: [
                {
                    nome: "Andréa L.",
                    texto: "\"Experiente e resolveu o problema com o esgoto na hora.\"",
                    img: "../assets/Encanador/Aval3.jpg"
                },
                {
                    nome: "Thiago M.",
                    texto: "\"Muito prático, mas cobrou taxa extra pelo material.\"",
                    img: "../assets/Encanador/Aval4.jpg"
                }
            ]
        },
        {
            nome: "Diego Ramos",
            tempo: "7 anos",
            classif: 4.9,
            img: "../assets/Encanador/Encanador3.jpg",
            avaliacoes: [
                {
                    nome: "Carla B.",
                    texto: "\"Reformou todo o sistema hidráulico do meu banheiro. Excelente trabalho!\"",
                    img: "../assets/Encanador/Aval5.jpg"
                },
                {
                    nome: "Luiz E.",
                    texto: "\"Atencioso e honesto. Fez até mais do que o combinado.\"",
                    img: "../assets/Encanador/Aval6.jpg"
                }
            ]
        }
    ],
    Pintor: [
        {
            nome: "André Luiz Corrêa",
            tempo: "7 anos",
            classif: 4.8,
            img: "../assets/Pintor/Pintor1.jpg",
            avaliacoes: [
                {
                    nome: "Mariana F.",
                    texto: "\"A pintura ficou perfeita, sem sujeira e com ótimo acabamento.\"",
                    img: "../assets/Pintor/Aval1.jpg"
                },
                {
                    nome: "Eduardo M.",
                    texto: "\"Muito atencioso e cuidadoso com os móveis durante o trabalho.\"",
                    img: "../assets/Pintor/Aval2.jpg"
                }
            ]
        },
        {
            nome: "Marcelo Antunes",
            tempo: "10 anos",
            classif: 4.6,
            img: "../assets/Pintor/Pintor2.jpg",
            avaliacoes: [
                {
                    nome: "Nelson K.",
                    texto: "\"Gostei da pintura, mas houve alguns respingos em áreas não protegidas.\"",
                    img: "../assets/Pintor/Aval3.jpg"
                },
                {
                    nome: "Vanessa D.",
                    texto: "\"Atendeu rápido e fez um bom trabalho geral.\"",
                    img: "../assets/Pintor/Aval4.jpg"
                }
            ]
        },
        {
            nome: "Rodrigo Farias",
            tempo: "8 anos",
            classif: 4.9,
            img: "../assets/Pintor/Pintor3.jpg",
            avaliacoes: [
                {
                    nome: "Isabela S.",
                    texto: "\"Profissional excelente, deixou meu apartamento com cara nova.\"",
                    img: "../assets/Pintor/Aval5.jpg"
                },
                {
                    nome: "Marcos H.",
                    texto: "\"Muita atenção aos acabamentos. Trabalho limpo e bem feito.\"",
                    img: "../assets/Pintor/Aval6.jpg"
                }
            ]
        }
    ]
};


// Função para gerar as estrelas (necessário para exibir a classificação)
const gerarEstrelas = (qtd) => {
    let estrelas = "";
    for (let i = 1; i <= 5; i++) {
        if (qtd >= i) {
            estrelas += "★";
        } else if (qtd >= i - 0.5) {
            estrelas += "⯨";
        } else {
            estrelas += "☆";
        }
    }
    return estrelas;
};

// Elementos do DOM para exibição dos resultados
const listaPrestadoresDiv = document.getElementById("lista-prestadores");
const resultadosPrestadoresSection = document.getElementById("resultados-prestadores");

// --- Funções de Dropdown e Busca ---
function toggleDropdown() {
    const dropdown = document.getElementById("filterDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Função para exibir os prestadores na interface
function exibirPrestadores(prestadoresFiltrados) {
    listaPrestadoresDiv.innerHTML = ''; // Limpa os resultados anteriores

    if (prestadoresFiltrados.length === 0) {
        listaPrestadoresDiv.innerHTML = '<p>Nenhum prestador encontrado com os critérios de busca.</p>';
        resultadosPrestadoresSection.style.display = 'block'; // Mostra a seção mesmo sem resultados
        return;
    }

    prestadoresFiltrados.forEach(prestador => {
        const prestadorCard = document.createElement('div');
        prestadorCard.classList.add('prestador-card'); // Adicione uma classe para estilização via CSS
        prestadorCard.innerHTML = `
            <img src="${prestador.img}" alt="${prestador.nome}">
            <h3>${prestador.nome}</h3>
            <p>Tipo de Serviço: <strong>${prestador.tipoServico}</strong></p>
            <p>Experiência: ${prestador.tempo}</p>
            <p>Avaliação: ${gerarEstrelas(prestador.classif)} (${prestador.classif})</p>
            <a href="contratar.html?id=${encodeURIComponent(prestador.tipoServico)}&nome=${encodeURIComponent(prestador.nome)}">Ver Perfil</a>
        `;
        listaPrestadoresDiv.appendChild(prestadorCard);
    });

    resultadosPrestadoresSection.style.display = 'block'; // Mostra a seção de resultados
}

function filtrarProfissionais() {
    const nomeBusca = document.getElementById("searchInput").value.toLowerCase();
    const checkboxes = document.querySelectorAll('#filterDropdown input[type="checkbox"]:checked');
    const profissoesSelecionadas = Array.from(checkboxes).map(cb => cb.value.toLowerCase());

    let prestadoresEncontrados = [];

    // Itera sobre cada tipo de serviço no objeto 'perfis'
    for (const tipoServico in perfis) {
        if (perfis.hasOwnProperty(tipoServico)) {
            // Se nenhuma profissão foi selecionada OU a profissão atual está entre as selecionadas
            if (profissoesSelecionadas.length === 0 || profissoesSelecionadas.includes(tipoServico.toLowerCase())) {
                perfis[tipoServico].forEach(prestador => {
                    // Verifica se o nome do prestador corresponde à busca (se houver)
                    const nomeCorresponde = prestador.nome.toLowerCase().includes(nomeBusca);

                    if (nomeCorresponde) {
                        // Adiciona o tipo de serviço ao objeto do prestador para exibição
                        prestadoresEncontrados.push({ ...prestador, tipoServico: tipoServico });
                    }
                });
            }
        }
    }

    exibirPrestadores(prestadoresEncontrados); // Exibe os resultados
    toggleDropdown(); // Fecha o dropdown após o filtro
}

// Fecha o dropdown ao clicar fora
document.addEventListener('click', function (event) {
    const dropdown = document.getElementById("filterDropdown");
    const toggle = document.querySelector(".filter-toggle"); // Ou o botão que abre/fecha o dropdown
    if (!dropdown.contains(event.target) && !toggle.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

// Adicione este listener para o campo de busca se quiser buscar ao pressionar Enter
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Impede o envio do formulário padrão
        filtrarProfissionais();
    }
});

// --- Funções de Pastas (seu código existente) ---
function toggleFolder(event, id) {
    event.preventDefault();
    const folders = document.querySelectorAll('.folder');

    folders.forEach(f => {
        if (f.id !== id) f.style.display = 'none';
    });

    const target = document.getElementById(id);
    target.style.display = (target.style.display === 'block') ? 'none' : 'block';
}

// Fechar se clicar fora
document.addEventListener('click', function(e) {
    // Verifica se o clique não foi dentro de um .info-item ou de um .folder
    if (!e.target.closest('.info-item') && !e.target.closest('.folder')) {
        document.querySelectorAll('.folder').forEach(f => f.style.display = 'none');
    }
});


// --- Funções de Login/Logout (seu código existente, mas ajustado para as novas chaves do localStorage) ---

// Verifica se o usuário está logado e ajusta o botão de navegação
window.onload = function() {
    // Esconde a seção de resultados da busca inicialmente
    resultadosPrestadoresSection.style.display = 'none';

    // Lógica de ajuste do botão de navegação
    const tipoUsuarioLogado = localStorage.getItem("tipoUsuarioLogado");

    if (tipoUsuarioLogado) { // Se tipoUsuarioLogado existe, o usuário está logado
        const botaoNav = document.getElementById('botao-nav');
        if (botaoNav) { // Garante que o elemento exista
            if (tipoUsuarioLogado === 'prestador') {
                botaoNav.textContent = 'Agenda';
                botaoNav.href = '../agenda/agenda.html';
            } else if (tipoUsuarioLogado === 'cliente') {
                botaoNav.textContent = 'Meus Serviços';
                // Certifique-se de que 'servicos.html' é a página correta para serviços do cliente
                botaoNav.href = 'servicos.html';
            }
        }
    }
};

const sairMenu = () => {
    const tipoUsuario = localStorage.getItem("tipoUsuarioLogado");

    if (tipoUsuario === "prestador") {
        localStorage.removeItem("prestadorEmail");
        localStorage.removeItem("prestadorSenha");
        localStorage.removeItem("prestadorLogado");
        localStorage.removeItem("tipoUsuarioLogado");
        window.location.href = "../login/prestador.html";
    } else if (tipoUsuario === "cliente") {
        localStorage.removeItem("clienteEmail");
        localStorage.removeItem("clienteSenha");
        localStorage.removeItem("clienteLogado");
        localStorage.removeItem("tipoUsuarioLogado");
        window.location.href = "../login/cliente.html";
    } else {
        // Caso não haja tipo de usuário logado (por segurança), redireciona para a home
        window.location.href = "../home/home.html";
    }
}