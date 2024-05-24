function abrirModal(pokemonId) {

    const modalContent = document.getElementById('modal-content');

    pokeApi.getPokemonModal(pokemonId).then((pokemon) => {
        const newHtmlModal = `
        <h1 class="modal-pokeTitle">${pokemon.name}</h1>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.number}.svg" class="modal-pokeImg" alt="${pokemon.name}">
        <ol class="pokemon-status">
            <li class="pokemonHP">HP - ${pokemon.stats}</li>
            <li class="pokemonATK">Attack - ${pokemon.stats.}</li>
            <li class="pokemonDEF">Defense - ${pokemon.stats}</li>
            <li class="pokemonSpATK">Sp.Atk - ${pokemon.stats}</li>
            <li class="pokemonSpDEF">Sp.Def - ${pokemon.stats}</li>
            <li class="pokemonSPEED">Speed - ${pokemon.stats}</li>
            <li class="pokemonTOTAL">Total - 00 </li>
        </ol>
        <button class="fechar-modal" id="fechar-modal">X</button>
    `;
        modalContent.innerHTML = newHtmlModal;
    });

    const modal = document.getElementById('modal-window');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar-modal' || e.target.id == 'modal-window') {
            modal.classList.remove('abrir');;
        }
    });
}