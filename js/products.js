
// <!-- JavaScript cho nút Xem thêm -->
    
document.querySelector('.read-more').addEventListener('click', function () {
    const moreContent = document.querySelector('.more-content');

    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'inline';
        this.textContent = 'Thu gọn';
    } else {
        moreContent.style.display = 'none';
        this.textContent = 'Xem thêm';
    }
});

var input = document.querySelector('#qty');
var btnminus = document.querySelector('.qtyminus');
var btnplus = document.querySelector('.qtyplus');

if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {

    var min = Number(input.getAttribute('min'));
    var max = Number(input.getAttribute('max'));
    var step = Number(input.getAttribute('step'));

    function qtyminus(e) {
        var current = Number(input.value);
        var newval = (current - step);
        if (newval < min) {
            newval = min;
        } else if (newval > max) {
            newval = max;
        }
        input.value = Number(newval);
        e.preventDefault();
    }

    function qtyplus(e) {
        var current = Number(input.value);
        var newval = (current + step);
        if (newval > max) newval = max;
        input.value = Number(newval);
        e.preventDefault();
    }

    btnminus.addEventListener('click', qtyminus);
    btnplus.addEventListener('click', qtyplus);

} // End if test
// Hàm để thêm sản phẩm vào giỏ hàng và chuyển hướng tới trang giỏ hàng
function buyNow() {
    let soLuongGioHang = parseInt(document.getElementById('quantity').innerHTML);
    const soLuongSanPham = parseInt(document.getElementById('qty').value);

    soLuongGioHang = soLuongGioHang + soLuongSanPham;
    document.getElementById('quantity').innerHTML = soLuongGioHang;
    
    showNotification("Thêm vào giỏ hàng thành công!");
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerText = message;

    // Thêm class để hiển thị thông báo
    notification.classList.remove('hidden');
    notification.classList.add('show');

    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hidden');
    }, 2000);
}

    // Chuyển hướng khi nhấn Enter trong input
    document.querySelector('.search-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Ngừng hành động mặc định của Enter
            // Chuyển đến trang tìm kiếm
            window.location.href = '/Search.html';
        }
    });

    // Chuyển hướng khi nhấn vào kính lúp
    document.querySelector('.search-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngừng gửi form
        // Chuyển đến trang tìm kiếm
        window.location.href = '/Search.html';
    });

