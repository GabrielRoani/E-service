const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const imgPrest = document.getElementById("img-prest");
const imgClient1 = document.getElementById("img-client1");
const imgClient2 = document.getElementById("img-client2");

const tipoServ = document.getElementById("tipoServ");
const nome = document.getElementById("nome");
const tempoServ = document.getElementById("tempoServ");
const classif = document.getElementById("classif");

const nomeAval1 = document.getElementById("nomeAval1");
const avaliacao1 = document.getElementById("avaliacao1");
const nomeAval2 = document.getElementById("nomeAval2");
const avaliacao2 = document.getElementById("avaliacao2");

// Modal elements
const modal = document.getElementById("modalSolicitacao");
const closeModalButton = document.querySelector(".close-button");
const confirmarSolicitacaoButton = document.getElementById("confirmarSolicitacao");
const descricaoSolicitacaoInput = document.getElementById("descricaoSolicitacao");
const dataContratacaoInput = document.getElementById("dataContratacao");


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

// ...existing code...

// Exemplo de perfis para Diarista (seu objeto 'perfis' permanece o mesmo)
const perfis = {
    Diarista: [
        {
            nome: "Maria das Dores",
            tempo: "8 anos",
            classif: 5.0,
            img: "../assets/Diarista/Diarista1.jpg",
            avaliacoes: [
                {
                    nome: "Ana L.",
                    texto: "\"A Maria é extremamente caprichosa, deixou minha casa impecável. Muito educada e pontual.\"",
                    img: "../assets/Diarista/Aval1.jpg"
                },
                {
                    nome: "Henrique M.",
                    texto: "\"Já contratei várias vezes e sempre fico satisfeita. Confiável e detalhista.\"",
                    img: "../assets/Diarista/Aval2.jpg"
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
                    "texto": "\"Fez um armário sob medida maravilhoso. Entregou antes do prazo!\"",
                    "img": "../assets/Marceneiro/Aval1.jpg"
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
                    img: "../assets/Encanador/Aval2.jpg"
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

let paginaAtual = 0;

const mostrarPerfil = () => {
  const lista = perfis[id];
  if (!lista) return;
  const perfil = lista[paginaAtual];

  imgPrest.src = perfil.img;
  tipoServ.innerHTML = id;
  nome.innerHTML = perfil.nome;
  tempoServ.innerHTML = perfil.tempo;
  classif.innerHTML = `(${perfil.classif}) ${gerarEstrelas(perfil.classif)}`;

  imgClient1.src = perfil.avaliacoes[0].img;
  nomeAval1.innerHTML = perfil.avaliacoes[0].nome;
  avaliacao1.innerHTML = `<i>${perfil.avaliacoes[0].texto}</i>`;
  avaliacao1.style.color = "gray";

  imgClient2.src = perfil.avaliacoes[1].img;
  nomeAval2.innerHTML = perfil.avaliacoes[1].nome;
  avaliacao2.innerHTML = `<i>${perfil.avaliacoes[1].texto}</i>`;
  avaliacao2.style.color = "gray";
}

const btnAnterior = () => {
  if (paginaAtual > 0) {
    paginaAtual--;
    mostrarPerfil();
  }
};

const btnProximo = () => {
  if (paginaAtual < perfis[id].length - 1) {
    paginaAtual++;
    mostrarPerfil();
  }
};

mostrarPerfil();

// Alteração na função solicitarServ para abrir o modal
const solicitarServ = () => {
    modal.style.display = "block"; // Abre o modal
};

// Fechar o modal ao clicar no 'x'
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar o modal ao clicar fora dele
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Confirmar a solicitação e salvar na agenda
confirmarSolicitacaoButton.addEventListener("click", () => {
    const lista = perfis[id];
    if (!lista) return;
    const perfil = lista[paginaAtual];

    const descricao = descricaoSolicitacaoInput.value;
    const data = dataContratacaoInput.value;

    if (!descricao || !data) {
        alert("Por favor, preencha a descrição e a data da solicitação.");
        return;
    }

    let servicosContratados = JSON.parse(localStorage.getItem("servicosContratados")) || [];

    const novoServico = {
        id: Date.now(), // ID único
        tipo: id,
        nomePrestador: perfil.nome,
        descricao: descricao,
        data: data,
        img: perfil.img,
        status: null // Para a agenda, inicializa como null (pendente)
    };

    servicosContratados.push(novoServico);
    localStorage.setItem("servicosContratados", JSON.stringify(servicosContratados));

    // Mensagem de sucesso
    const main = document.querySelector("main");
    main.innerHTML = `
      <div class="containerInf" style="text-align:center; padding:40px;">
        <h2>Solicitação realizada com sucesso!</h2>
        <p>
          O serviço de <strong>${novoServico.descricao}</strong> com <strong>${novoServico.nomePrestador}</strong> foi solicitado para <strong>${new Date(novoServico.data).toLocaleDateString('pt-BR')}</strong>.<br>
          Verifique sua agenda para acompanhar o status.
        </p>
        <img src="${novoServico.img}" alt="Prestador" width="100" style="margin:20px auto; border-radius:50%;">
        <div class="pagBtn">
            <a href="../home/home.html">
            <button>Voltar para Home</button>
            </a>
        </div>
      </div>
    `;

    modal.style.display = "none"; // Fecha o modal
});