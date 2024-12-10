// Đợi DOM load xong
document.addEventListener("DOMContentLoaded", function () {

    // Lấy form và các trường dữ liệu
    const registerForm = document.getElementById("register-form");
    const emailInput = document.getElementById("email");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const togglePassword1 = document.getElementById("togglePassword1");
    const togglePassword2 = document.getElementById("togglePassword2");

    // Kiểm tra tính hợp lệ của form
    function validateForm() {
        let isValid = true;

        // Kiểm tra email hợp lệ
        const email = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError(emailInput, "Email không hợp lệ.");
            isValid = false;
        } else {
            showSuccess(emailInput);
        }

        // Kiểm tra tên đăng nhập
        const username = usernameInput.value;
        if (username.length < 5) {
            showError(usernameInput, "Tên đăng nhập phải có ít nhất 5 ký tự.");
            isValid = false;
        } else {
            showSuccess(usernameInput);
        }

        // Kiểm tra mật khẩu
        const password = passwordInput.value;
        if (password.length < 6) {
            showError(passwordInput, "Mật khẩu phải có ít nhất 6 ký tự.");
            isValid = false;
        } else {
            showSuccess(passwordInput);
        }

        // Kiểm tra mật khẩu xác nhận
        const confirmPassword = confirmPasswordInput.value;
        if (confirmPassword !== password) {
            showError(confirmPasswordInput, "Mật khẩu xác nhận không khớp.");
            isValid = false;
        } else {
            showSuccess(confirmPasswordInput);
        }

        return isValid;
    }

    // Hiển thị thông báo lỗi
    function showError(input, message) {
        const small = input.nextElementSibling;
        small.textContent = message;
        small.style.color = "red";
        input.classList.add("is-invalid");
    }

    // Hiển thị thông báo thành công
    function showSuccess(input) {
        const small = input.nextElementSibling;
        small.textContent = "";
        input.classList.remove("is-invalid");
    }

    // Xử lý sự kiện khi form được submit
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Ngừng hành động mặc định của form

        if (validateForm()) {
            // Lấy thông tin người dùng từ form
            const email = emailInput.value;
            const username = usernameInput.value;
            const password = passwordInput.value;

            // Kiểm tra nếu tài khoản đã tồn tại trong localStorage
            const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
            const userExists = existingUsers.some(user => user.email === email || user.username === username);

            if (userExists) {
                alert("Tài khoản hoặc email đã tồn tại.");
            } else {
                // Tạo người dùng mới và lưu vào localStorage
                const newUser = { email, username, password };
                existingUsers.push(newUser);
                localStorage.setItem("users", JSON.stringify(existingUsers));

                alert("Đăng ký thành công! Đăng nhập ngay thôi!");
                window.location.href = "../pages/Login.html"; // Chuyển hướng tới trang đăng nhập
            }
        }
    });

    // Hiển thị mật khẩu
    togglePassword1.addEventListener("click", function () {
        const passwordType = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = passwordType;
    });

    togglePassword2.addEventListener("click", function () {
        const confirmPasswordType = confirmPasswordInput.type === "password" ? "text" : "password";
        confirmPasswordInput.type = confirmPasswordType;
    });
});
