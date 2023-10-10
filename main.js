const form = document.getElementById("form-subtenencia");
const equipsRepostos = document.getElementById('valor-reposto');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeDeGuerra = document.getElementById('nome-oficial');
    const numeroDeEquips = document.getElementById('numero-fornecido');
    const equipsNovos = document.getElementById('material-novo');
    const errorRepostosMessage = document.querySelector('.error-message');
    const containerMensagemSucesso = document.querySelector('.success-message');

    const totalEquipamentos = parseInt(equipsRepostos.value) + parseInt(equipsNovos.value);

    const mensagemSucesso = `Montante de Equipamentos fornecidos pros soldados: <b>${numeroDeEquips.value}</b> - Equipamentos repostos + novos: <b>${totalEquipamentos}</b> - Oficial de dia Fornecedor: <b>${nomeDeGuerra.value}</b>`;

    if (totalEquipamentos >= parseInt(numeroDeEquips.value)) {
        containerMensagemSucesso.innerHTML = `<p>${mensagemSucesso}</p>`;
        containerMensagemSucesso.style.display = 'block';
        errorRepostosMessage.style.display = 'none'; // Oculta a mensagem de erro

        nomeDeGuerra.value = '';
        numeroDeEquips.value = '';
        equipsRepostos.value = '';
        equipsNovos.value = '';
        equipsRepostos.style.border = '';
    } else {
        equipsRepostos.style.border= '1px solid red';
        errorRepostosMessage.style.display = 'block';
        containerMensagemSucesso.style.display = 'none'; // Oculta a mensagem de sucesso
        document.querySelector('.error-message').style.display= 'block';
    }
})

equipsRepostos.addEventListener('keyup', function (e){
    console.log(e.target.value);

    if (!formValido){
        equipsRepostos.style.border= '1px solid red';
        document.querySelector('.error-message').style.display= 'block';
    } else {
        equipsRepostos.style = '';
        document.querySelector('.error-message').style.display= 'none';
    }
});






