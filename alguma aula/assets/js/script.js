const inputTarefa = document.querySelector('.listaDeTarefa');
const btnTarefa = document.querySelector('.btn-add-tarefa');
const tarefa = document.querySelector('.tarefa');

function criarLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        console.log('enterpressionado')
        if (!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
    }
});

function limpaInput () {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar (li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta mensagem');
    li.appendChild(botaoApagar);
}

function criarTarefa(textoInput) {
    const li = criarLi();
    li.innerText = textoInput;
    tarefa.appendChild(li);
    limpaInput ();
    criaBotaoApagar (li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
});

document.addEventListener ('click', function(e){
    const el = e.target;
    
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas()
    }
});

function salvarTarefas() {
    const liTarefas = tarefa.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefaJSON)
}

function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas) {
        criarTarefa(tarefa);
    }
}
adicionaTarefasSalvas();