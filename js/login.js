document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form-login");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    // Thêm sự kiện để ẩn/hiện mật khẩu
    togglePassword.addEventListener("click", function() {
        const type = password.type === 'password' ? 'text' : 'password';
        password.type = type;

        // Thay đổi biểu tượng mắt
        const icon = this.querySelector('i');
        if (type === 'password') {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });

    // Lắng nghe sự kiện submit của form
    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Ngừng hành động mặc định của form

        // Kiểm tra thông tin đăng nhập
        if (validateLogin()) {
            if (checkLogin()) {
                alert("Đăng nhập thành công!");
                window.location.href = "../index.html"; // Chuyển hướng đến trang chủ hoặc trang khác
            } else {
                alert("Tên đăng nhập hoặc mật khẩu không chính xác.");
            }
        }
    });

    // Kiểm tra thông tin đăng nhập
    function validateLogin() {
        let valid = true;

        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();

        if (!usernameValue || !passwordValue) {
            alert("Tên đăng nhập và mật khẩu không được để trống.");
            valid = false;
        }

        return valid;
    }

    // Kiểm tra thông tin đăng nhập với dữ liệu trong localStorage
    function checkLogin() {
        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();

        // Lấy danh sách người dùng từ localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Tìm kiếm người dùng với thông tin đăng nhập khớp
        const user = users.find(user => user.username === usernameValue && user.password === passwordValue);

        return user ? true : false;
    }
});
