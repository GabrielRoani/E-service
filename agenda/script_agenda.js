document.addEventListener("DOMContentLoaded", function () {
    // Carrega as tarefas (serviços) do localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || {};
    let servicosContratados = JSON.parse(localStorage.getItem('servicosContratados')) || [];

    // Adiciona os serviços contratados ao objeto de tarefas para gerenciamento de status
    servicosContratados.forEach(servico => {
        // Usa uma combinação de ID e nome para garantir unicidade e facilidade de referência
        const taskKey = `${servico.id}-${servico.descricao}`;
        if (!tasks.hasOwnProperty(taskKey)) {
            tasks[taskKey] = servico.status; // Pode ser null, true (aceito), false (rejeitado)
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Atualiza o localStorage de tasks

    function updateCardVisuals(cardElement, taskKey, status) {
        const acceptButton = cardElement.querySelector('.aceitar');
        const rejectButton = cardElement.querySelector('.rejeitar');
        const statusTextElement = cardElement.querySelector('.status-text');

        cardElement.classList.remove('accepted', 'rejected');
        if (statusTextElement) statusTextElement.textContent = '';
        acceptButton.style.display = 'inline-block';
        rejectButton.style.display = 'inline-block';
        acceptButton.disabled = false;
        rejectButton.disabled = false;

        if (status === true) {
            cardElement.classList.add('accepted');
            if (statusTextElement) statusTextElement.textContent = 'Aceita';
            acceptButton.disabled = true;
        } else if (status === false) {
            cardElement.classList.add('rejected');
            if (statusTextElement) statusTextElement.textContent = 'Rejeitada';
            rejectButton.disabled = true;
        }
    }

    // Prepara os eventos para o FullCalendar
    const calendarEvents = [];

    // Adiciona as tarefas predefinidas (se ainda existirem e não forem sobrescritas)
    // Você pode remover estas tarefas fixas se quiser que apenas as contratadas apareçam.
    // Para fins de demonstração, vamos mantê-las e garantir que não dupliquem.
    const predefinedTasks = [
        { title: 'Reunião com cliente às 14h', start: '2025-05-05', allDay: true, id: 'Reunião com cliente às 14h' },
        { title: 'Apresentação do projeto', start: '2025-05-21', allDay: true, id: 'Apresentação do projeto' },
        { title: 'Chamada de vídeo com equipe', start: '2025-05-15', allDay: true, id: 'Chamada de vídeo com equipe' }
    ];

    predefinedTasks.forEach(task => {
        if (!servicosContratados.some(s => `${s.id}-${s.descricao}` === task.id)) {
            calendarEvents.push(task);
            if (!tasks.hasOwnProperty(task.id)) {
                tasks[task.id] = null; // Inicializa status se não existir
            }
        }
    });

    // Adiciona os serviços contratados como eventos do calendário
    servicosContratados.forEach(servico => {
        calendarEvents.push({
            title: `${servico.descricao} com ${servico.nomePrestador}`,
            start: servico.data,
            allDay: true,
            id: `${servico.id}-${servico.descricao}`, // ID para referência
            className: servico.status === true ? 'event-accepted' : '' // Aplica classe se já estiver aceito
        });
    });

    // Inicializa o FullCalendar
    $('#calendar').fullCalendar({
        header: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        locale: 'pt-br',
        defaultView: 'month',
        events: calendarEvents,
        eventAfterRender: function(event, element) {
            // Aplica a classe 'event-accepted' para eventos que já estão aceitos
            const taskKey = event.id; // Agora o ID do evento é o taskKey
            if (tasks[taskKey] === true) {
                element.addClass('event-accepted');
            }
        }
    });

    // Renderiza os cards das tarefas dinamicamente
    const cardsSection = document.querySelector('.cards');
    cardsSection.innerHTML = ''; // Limpa os cards existentes

    Object.keys(tasks).forEach(taskKey => {
        let taskData;
        // Tenta encontrar a tarefa nos serviços contratados
        const foundServico = servicosContratados.find(s => `${s.id}-${s.descricao}` === taskKey);
        if (foundServico) {
            taskData = foundServico;
            taskData.title = `${taskData.descricao} com ${taskData.nomePrestador} (${new Date(taskData.data).toLocaleDateString('pt-BR')})`;
        } else {
            // Se não for um serviço contratado, assume que é uma das tarefas predefinidas
            const predefinedTask = predefinedTasks.find(t => t.id === taskKey);
            if (predefinedTask) {
                taskData = {
                    title: predefinedTask.title,
                    img: '', // Não temos imagem para tarefas predefinidas, ou você pode adicionar uma padrão
                    descricao: predefinedTask.title, // Usa o título como descrição
                    data: predefinedTask.start // Usa a data de início como data
                };
            } else {
                return; // Pula se a tarefa não for encontrada em nenhum lugar
            }
        }

        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-task-id', taskKey); // Usa o taskKey como data-task-id

        card.innerHTML = `
            <div class="icon">👤✔️</div>
            <input type="text" value="${taskData.title}" readonly>
            <div class="status-text"></div>
            <div class="buttons">
                <button class="aceitar" data-task="${taskKey}">Aceitar</button>
                <button class="rejeitar" data-task="${taskKey}">Rejeitar</button>
            </div>
        `;
        cardsSection.appendChild(card);
        updateCardVisuals(card, taskKey, tasks[taskKey]); // Atualiza o visual do card
    });


    document.querySelectorAll('.aceitar, .rejeitar').forEach(button => {
        button.addEventListener('click', function () {
            const taskKey = this.getAttribute('data-task');
            const cardElement = this.closest('.card');
            const isAcceptButton = this.classList.contains('aceitar');

            if (tasks[taskKey] === isAcceptButton) {
                tasks[taskKey] = null; // Desfaz a seleção
            } else {
                tasks[taskKey] = isAcceptButton; // Define o novo status
            }

            localStorage.setItem('tasks', JSON.stringify(tasks));
            updateCardVisuals(cardElement, taskKey, tasks[taskKey]);

            const calendarEvents = $('#calendar').fullCalendar('clientEvents');
            const eventToUpdate = calendarEvents.find(event => event.id === taskKey);

            if (eventToUpdate) {
                if (tasks[taskKey] === true) {
                    eventToUpdate.className = ['event-accepted'];
                } else {
                    eventToUpdate.className = [];
                }
                $('#calendar').fullCalendar('updateEvent', eventToUpdate);
            }
        });
    });
});