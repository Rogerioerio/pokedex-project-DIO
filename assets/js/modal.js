function abrirModal() {
    const modal = document.getElementById('modal-window');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar-modal' || e.target.id == 'modal-window') {
            modal.classList.remove('abrir')
        }
    });
}