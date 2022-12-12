function buscaViagemERedirecionaAtePagina(inputPesquisador, arrayCidades) {
    const valorPesquisado = inputPesquisador.value;

    arrayCidades.forEach(cidade => {
        if (valorPesquisado === cidade.cidade) {
           return window.location.assign(`${cidade.link}.html`)
        }
    });
}