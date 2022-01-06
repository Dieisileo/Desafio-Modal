function openModal(modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.add('open');
  modal.addEventListener('click', (e) => {
    if(e.target.id == modalID || e.target.className == 'close') {
      modal.classList.remove('open')
    }
  });
}

const cardID = document.querySelector('#card0');
cardID.addEventListener('click', () => openModal('modalConteudo0'))

const cardID1 = document.querySelector('#card1')
cardID1.addEventListener('click', () => openModal('modalConteudo1'))

const cardID2 = document.querySelector('#card2')
cardID2.addEventListener('click', () => openModal('modalConteudo2'))