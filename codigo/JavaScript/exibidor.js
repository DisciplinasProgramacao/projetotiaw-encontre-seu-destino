function exibirResultados(arrayLocais, idLocalExibicao) {

    const demostrador = document.querySelector(idLocalExibicao);

    let destaques = '';
    arrayLocais.forEach(local => {


        /// Aqui crie o card estilizado com as Imagens
        destaques += `<div class='card p-4'>
            <p>${local.id}</p>
            <h3>${local.estado}</h3>
            <h4>${local.local}</h4>
            <img src='${local.imagem}' class="img-thumbnail image-tamanho ">
            <p>${local.desc}</p>
            <p>${local.destaque}</p>
        </div>`
    });

    demostrador.innerHTML = destaques;
}