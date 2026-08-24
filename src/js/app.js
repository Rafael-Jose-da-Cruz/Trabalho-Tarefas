let tasks = [];
const list = document.querySelector('#list');

document.addEventListener('DOMContentLoaded', async () => {
    await render();
    const inputEl = document.querySelector('#inputEl');
    const addBtn = document.querySelector('#addBtn');

    await addBtn.addEventListener('click', async () => {
        const task = inputEl.value;
        tasks.push(task);
        await render()
    });
});

const render = async () => {
    list.innerHTML = '';

    if (tasks.length === 0) {
        list.innerHTML = '<p>Não há tarefas cadastradas</p>'
        return;
    }

    tasks.forEach(task => {
        list.innerHTML += `
            <li>${task}</li>
        `;
    });
}