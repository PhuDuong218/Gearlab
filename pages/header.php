<header class="header__content ">
    <div class="header__menu" id="mainNav">
        <a class="header__link" href="index.php">
            <img class="header__logo" src="Images/logo/logo.png" alt="logo">
        </a>
        <form class="input-group" action="pages/search.php" method="get">
            <div class="input-wrapper">
                <input type="text" class="form-control" placeholder="Tìm kiếm..." aria-label="Search">
                <button type="submit" id="button-addon2" class="header__search--button">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </form>
        <ul class="header__active">
        <li><a href="index.php?quanli=trangchu"> Trang Chủ</a></li>
        <li><a href="index.php?quanli=sanpham">Sản Phẩm</a></li>
        <li><a href="index.php?quanli=gioithieu">Giới Thiệu</a></li>
        <li><a href="index.php?quanli=lienhe">Liên Hệ</a></li>

        </ul>
    </div>
    <div class="header__tool">
        <div id="userMenu" class="user-menu">
            <a href="pages/Login.php">Đăng nhập</a> |
            <a href="pages/SignUp.php">Đăng ký</a>
        </div>
        <a href="pages/Cart.php">
            <i class="fas fa-shopping-cart"></i>
            <span class="notify-cart" id="quantity">0</span>
        </a>
    </div>
</header>

