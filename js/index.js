let teams = [];
criarBtn.onclick = () => {
    overlay.classList.add('show');
    formCriar.classList.add('show');
}

fecharForm.onclick = () => {
    formCriar.classList.remove('show');
    overlay.classList.remove('show');
}

fecharParticipanteBtn.onclick = () => {
    overlay.classList.remove('show');
    formParticipante.classList.remove('show');
}

overlay.onclick = () => {
    overlay.classList.remove('show');
    formCriar.classList.remove('show');
    formParticipante.classList.remove('show');
}

formCriar.onsubmit = () => {
    event.preventDefault();
    if(verificarLista(nome.value)){
        alert("Este nome já está em uso");
    } else {
        teams.push({
            name: nome.value,
            capacity: capacidade.value,
            members: []
        });
        adicionarCards();        
        formCriar.classList.remove('show');
        overlay.classList.remove('show');
    }
}

formParticipante.onsubmit = () => {
    event.preventDefault();
    teams[Number(teamID.value)].members.push(nomeParticipante.value);
    alert("Participante inserido com sucesso!")
    formParticipante.reset();
}

function adicionarCards(){
    lisTeams.innerHTML = '';
    if(teams.length === 0){
        lisTeams.innerHTML = ` <li class="noTeams"><h4>Nenhum team criado ainda</h4></li>`
        return; 
    }
    for(let i = 0; i < teams.length; i++){
    lisTeams.innerHTML += `
    <li>
        <h4>${teams[i].name}<box-icon name="show"></box-icon></h4>
        <h1>0 <span>/ ${teams[i].capacity}</span></h1>
        <div class="actions">
        <button onClick="mostrarFormParticipante(${i})">adicionar</button>
        <button onClick="removerCards(${i})"><box-icon name='trash-alt'></box-icon></button>
        </div>
    </li>
`;
    }     
}
function removerCards(indice){
    let listaAuxiliar = [];
    for (let i = 0; i < teams.length; i++){
        if(i != indice){
            listaAuxiliar.push(teams[i]); 
        }
    }
    teams = listaAuxiliar;
    adicionarCards();
}
function verificarLista(nomeDoTeam){
    let achou = false;
    for(let i = 0; i < teams.length; i++){
        if(teams[i].name === nomeDoTeam){
            achou = true;
        }
    }
    return achou;
}
function mostrarFormParticipante(indice){
    overlay.classList.add("show");
    formParticipante.classList.add("show");
    teamID.value = indice;
}