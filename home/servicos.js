const confirmarSolic = (idx) => {
  const main = document.querySelector("main");
  main.innerHTML = `
    <div class="containerInf" id="agradecimentoArea" style="flex-direction:column; align-items:center;">
      <h2>Obrigado por confirmar!</h2>
      <p>Por favor, avalie o serviço prestado:</p>
      <div id="estrelas" style="font-size:2rem; color: #FFD700; cursor:pointer;">
        <span data-value="1">&#9734;</span>
        <span data-value="2">&#9734;</span>
        <span data-value="3">&#9734;</span>
        <span data-value="4">&#9734;</span>
        <span data-value="5">&#9734;</span>
      </div>
      <textarea name="comentario" id="comentario" cols="50" rows="5" class="comentario" placeholder="Deixe seu comentário"></textarea>
      <div class="solicitarBtn">
        <button id="avaliarBtn">Enviar Avaliação</button>
      </div>
      <div id="avaliacaoSucesso" style="color:green; display:none; margin-top:10px;">
        Avaliação enviada com sucesso!
      </div>
    </div>
  `;

  let nota = 0;
  const estrelas = document.querySelectorAll('#estrelas span');
  estrelas.forEach((estrela, idx) => {
    estrela.addEventListener('mouseover', () => {
      estrelas.forEach((e, i) => {
        e.innerHTML = i <= idx ? '&#9733;' : '&#9734;';
      });
    });
    estrela.addEventListener('mouseout', () => {
      estrelas.forEach((e, i) => {
        e.innerHTML = i < nota ? '&#9733;' : '&#9734;';
      });
    });
    estrela.addEventListener('click', () => {
      nota = idx + 1;
      estrelas.forEach((e, i) => {
        e.innerHTML = i < nota ? '&#9733;' : '&#9734;';
      });
    });
  });

  document.getElementById("avaliarBtn").onclick = () => {
    if (nota === 0) {
      alert("Por favor, selecione uma nota.");
      return;
    }
    document.getElementById("avaliacaoSucesso").style.display = "block";
  };
};

const servicos = JSON.parse(localStorage.getItem('servicosContratados')) || [];

function excluirServico(idx) {
  servicos.splice(idx, 1);
  localStorage.setItem('servicosContratados', JSON.stringify(servicos));
  renderizarServicos();
}

function renderizarServicos() {
  const container = document.getElementById('servicosContainer');
  container.innerHTML = '';

  if (servicos.length === 0) {
    container.innerHTML = '<p>Nenhum serviço contratado.</p>';
    return;
  }

  servicos.forEach((servico, idx) => {
    container.innerHTML += `
      <div class="containerInf">
        <div class="inforPrest">
          <div class="profile-pic" style="position:relative;">
            <img src="${servico.img}" alt="profile-pic-prest" width="75" height="75" />
          </div>
          <div>
            <div>
              <p class="subtitle">Tipo:</p>
              <p>${servico.tipo}</p>
            </div>
            <div>
              <p class="subtitle">Nome:</p>
              <p>${servico.nome}</p>
            </div>
            <div>
              <p class="subtitle">Tempo de Serviço:</p>
              <p>${servico.tempo}</p>
            </div>
          </div>
          
          <div class="pagBtn">
            <button onclick="excluirServico(${idx})" title="Excluir serviço" id="excluirBtn">&#10006; Excluir</button>
            <button onclick="confirmarSolic(${idx})">Confirmar Serviço</button>
          </div>
        </div>
      </div>
    `;
  });
}

// Torna as funções globais para o HTML acessar
window.confirmarSolic = confirmarSolic;
window.excluirServico = excluirServico;

renderizarServicos();