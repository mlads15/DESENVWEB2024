console.log("akjskas")

const input = document.querySelector('input');

const botao = document.querySelector('button');

const lista = document.querySelector('ul');

botao.addEventListener('click', ()=> {

    let tarefa = input.value;

    if(tarefa != "") {

        addToList(tarefa)
        salvarNoBloco(tarefa)

    }

    input.value = ''

});

function addToList(tarefa) {

    let novaTarefa = document.createElement('li');
    novaTarefa.textContent = tarefa;

    let excluir = document.createElement('button')
    excluir.textContent = 'Excluir';

    excluir.addEventListener('click', ()=> {

        novaTarefa.remove()

    });

    novaTarefa.appendChild(excluir)

    lista.appendChild(novaTarefa);

}

function salvarNoBloco(tarefa) {

//salvar no localstorage

    const tarefas = obterTodasAsTarefas;

    tarefas.push(tarefa);

    localStorage.s('tarefas', JSON.stringify(tarefas))

}

function obterTodasAsTarefas(tarefa) {

    const tarefas = localStorage.getItem('tarefas')

    if(tarefas) {

    /*tarefas = JSON.parse(tarefas)
           } else {
     tarefas =

     }*/
        const tarefas = localStorage.getItem('tarefas')

        return tarefas ? JSON.parse(tarefas) : [];

    }

}