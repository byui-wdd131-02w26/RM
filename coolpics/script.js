const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog.viewer');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
    const img = e.target.closest('img');
    if (!img) return;

    const smallSrc = img.src;
    const largeSrc = smallSrc.replace("coolpic.jpg", "high_img.jpg");

    modalImage.src = largeSrc;
    modalImage.alt = img.alt;

    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
