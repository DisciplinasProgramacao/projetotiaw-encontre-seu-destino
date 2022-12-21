
// Busca Id na URL
const estadoSelecionado = window.location.search

// Retira sinal de ?
const filtrarLocalId = estadoSelecionado.replace('?', '');

// Filtra array de locais pelo id
const locaisBuscado = filtrarLocais(lugares, filtrarLocalId);

// Exibe resultados na tela
exibirResultados(locaisBuscado, '#resultadoPesquisa');

function filtrarLocais(lugares, filtrarLocalId) {
     return lugares.filter((local) => {
        if (local.id === filtrarLocalId) {
            return local
        }
    })
}