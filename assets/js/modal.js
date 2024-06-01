function abrirModal(pokemonId) {

    const modalContent = document.getElementById('modal-content');

    pokeApi.getPokemonModal(pokemonId).then((pokemon) => {
        const pokemonStats = pokemon.stats;
        let pokemonTotal = 0;

        for (let i = 0; i < pokemonStats.length; i++) {
            pokemonTotal = pokemonTotal + pokemonStats[i];
        }

        const newHtmlModal = `
        <h1 class="modal-pokeTitle">${pokemon.name}</h1>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.number}.svg" class="modal-pokeImg" alt="${pokemon.name}">
        <ol class="pokemon-status">
            <li class="pokemonHP">HP - ${pokemonStats[0]}</li>
            <li class="pokemonATK">Attack - ${pokemonStats[1]}</li>
            <li class="pokemonDEF">Defense - ${pokemonStats[2]}</li>
            <li class="pokemonSpATK">Sp.Atk - ${pokemonStats[3]}</li>
            <li class="pokemonSpDEF">Sp.Def - ${pokemonStats[4]}</li>
            <li class="pokemonSPEED">Speed - ${pokemonStats[5]}</li>
            <li class="pokemonTOTAL">Total - ${pokemonTotal} </li>
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