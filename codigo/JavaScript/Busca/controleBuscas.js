const pesquisadorInput = document.querySelector('#pesquisador');

pesquisadorInput.addEventListener('input', () => {
    buscaViagemERedirecionaAtePagina(pesquisadorInput, cidades)
})
