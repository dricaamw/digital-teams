criarBtn.onclick = () => {
    // alert("clicou");
    // console.log("clicou aqui");
    overlay.classList.add('show');
    formCriar.classList.add('show');
}
fecharForm.onclick = () => {
    formCriar.classList.remove('show');
    overlay.classList.remove('show');
}
overlay.onclick = () => {
    formCriar.classList.remove('show');
    overlay.classList.remove('show');
}
formCriar.onsubmit = () => {
    event.preventDefault();

    // alert(nome.value+' '+capacidade.value);
    lisTeams.innerHTML = '';
    lisTeams.innerHTML = `
    <li>
        <h4>Nome do Team <box-icon name="show"></box-icon></h4>
        <h1>0 <span>/ 0</span></h1>
        <div class="actions">
        <button>adicionar</button>
        <button><box-icon type='solid' name='trash-alt'></box-icon></button>
        </div>
    </li>
`;

    formCriar.classList.remove('show');
    overlay.classList.remove('show');
}

