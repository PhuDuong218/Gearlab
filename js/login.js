// Tạo tài khoản mặc định nếu chưa tồn tại trong localStorage
document.addEventListener('DOMContentLoaded', () => {
    const defaultUser = {
        username: 'phuduong',
        password: 'phuduong123'
    };

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const exists = users.some(user => user.username === defaultUser.username);

    if (!exists) {
        users.push(defaultUser);
        localStorage.setItem('users', JSON.stringify(users)); 
    }
});


const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const form = document.getElementById('form-login');
const togglePassword = document.getElementById('togglePassword'); 


togglePassword.addEventListener('click', function() {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    const eyeIcon = this.querySelector('i');
    if (type === 'password') {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } else {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
});

function checkLogin(e) {
    e.preventDefault(); 

    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === usernameValue && user.password === passwordValue);

    if (user) {
        alert('Đăng nhập thành công!');
        window.location.href = "../page_user/user-index.html"; 
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
}

form.addEventListener('submit', checkLogin);
