document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const dots = document.querySelectorAll('.dots');
    const btnLeft = document.querySelector('.btn-left');
    const btnRight = document.querySelector('.btn-right');

    let currentIndex = 0;


    function updateSlider(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    updateSlider(currentIndex);


    setInterval(() => {

        currentIndex = (currentIndex + 1) % dots.length;
        updateSlider(currentIndex);
    }, 10000);


    btnRight.addEventListener('click', () => {

        currentIndex = (currentIndex + 1) % dots.length;
        updateSlider(currentIndex);
    });

    btnLeft.addEventListener('click', () => {

        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
        updateSlider(currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider(currentIndex);
        });
    });



});


// Lấy phần tử modal và nút đóng
const modal = document.getElementById('loginModal');
const closeModal = document.getElementsByClassName('close')[0];

// Mở modal
function showModal() {
    modal.classList.add('show');
}

// Đóng modal khi bấm vào nút đóng
closeModal.onclick = function () {
    modal.classList.remove('show');
}

// Đóng modal nếu người dùng bấm ra ngoài modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove('show');
    }
}
// Hiển thị modal khi bấm biểu tượng giỏ hàng
document.querySelector('.fa-shopping-cart').addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "block";
});
