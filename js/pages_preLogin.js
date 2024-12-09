

const cartButton = document.querySelector('.fa-shopping-cart'); 
const loginModal = document.getElementById('loginModal');
const closeModalButton = loginModal.querySelector('.close');

cartButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    loginModal.style.display = 'block'; // Hiển thị modal
});

// Đóng modal khi nhấn dấu x
closeModalButton.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});
