document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-login');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');

    // Tài khoản mặc định
    const defaultUsername = "phuduong";
    const defaultPassword = "123456";

    // Lấy tất cả người dùng từ localStorage
    function getUsersFromLocalStorage() {
        const users = localStorage.getItem("users");
        return users ? JSON.parse(users) : [];  // Trả về danh sách người dùng hoặc mảng rỗng
    }

    // Xử lý sự kiện khi người dùng nhấn nút "Đăng nhập"
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const enteredUsername = usernameField.value;
        const enteredPassword = passwordField.value;

        // Kiểm tra tài khoản và mật khẩu với tài khoản mặc định
        if (enteredUsername === defaultUsername && enteredPassword === defaultPassword) {
            alert("Đăng nhập thành công!");
            window.location.href = "../page_user/user-index.html"; // Chuyển hướng đến trang chủ
        } else {
            // Kiểm tra tài khoản người dùng đã đăng ký trong localStorage
            const users = getUsersFromLocalStorage();
            const user = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

            if (user) {
                alert("Đăng nhập thành công!");
                window.location.href = "../page_user/user-index.html"; // Chuyển hướng đến trang chủ
            } else {
                alert("Tên đăng nhập hoặc mật khẩu không đúng!");
            }
        }
    });

    // Chức năng hiển thị và ẩn mật khẩu
    const togglePassword = document.getElementById('togglePassword');
    togglePassword.addEventListener('click', function() {
        const type = passwordField.type === "password" ? "text" : "password";
        passwordField.type = type;
        togglePassword.querySelector('i').classList.toggle('fa-eye-slash');
    });
});
