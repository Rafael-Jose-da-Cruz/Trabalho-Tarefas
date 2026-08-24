let tasks = [];
const list = document.querySelector('#list');

document.addEventListener('DOMContentLoaded', async () => {
    await render();

    const inputEl = document.querySelector('#inputEl');
    const addBtn = document.querySelector('#addBtn');

    addBtn.addEventListener('click', async () => {
        const task = inputEl.value.trim();

        if (task === '') {
            return;
        }

        tasks.push({
            text: task,
            completed: false
        });

        inputEl.value = '';

        await render();
    });
});

const render = async () => {
    list.innerHTML = '';

    if (tasks.length === 0) {
        list.innerHTML = '<p>Não há tarefas cadastradas</p>';
        return;
    }

    tasks.forEach((task, index) => {
        list.innerHTML += `
            <li>
                <div class="text-container">
                    <p class="${task.completed ? 'completed' : ''}">
                        ${task.text}
                    </p>
                </div>

                <div class="button-container">
                    <button class="complete-btn">
                        ${task.completed ? 'Desmarcar' : 'Concluir'}
                    </button>

                    <button class="delete-btn">
                        Excluir
                    </button>
                </div>
            </li>
        `;
    });

    document.querySelectorAll('.complete-btn').forEach((btn, index) => {
        btn.addEventListener('click', async () => {
            tasks[index].completed = !tasks[index].completed;
            await render();
        });
    });

    document.querySelectorAll('.delete-btn').forEach((btn, index) => {
        btn.addEventListener('click', async () => {
            tasks.splice(index, 1);
            await render();
        });
    });
};