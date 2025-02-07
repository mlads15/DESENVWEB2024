function buscar (cep) {

    let ajax = new XMLHttpRequest();

    ajax.open('GET', 'https://viacep.com.br/ws/'+cep+'/json/', true);

    ajax.onload = function () {

        if(ajax.status == 200) {

            loading.style.display = "none";

            console.log('Resposta: ', JSON.parse(ajax.responseText));

            let endereco = JSON.parse(ajax.responseText);

            let resultado = document.querySelector('.resultado');

            // resultado.textContent = ajax.responseText;

            resultado.innerHTML = "Logradouro: " + endereco.logradouro + "<br>" + "Bairro: " + endereco.bairro;

            //resultado.textContent = endereco.cep;

        } else {

            console.error('Erro:', ajax.status, ajax.statusText);

        }

    }

    ajax.send(null);

}

let button = document.querySelector('button');

let loading = document.querySelector('.carregando');

button.addEventListener('click', ()=>{

    loading.style.display = "block";

    let input = document.querySelector('input');
    let cep = input.value;

    buscar(cep);

});