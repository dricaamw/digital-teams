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