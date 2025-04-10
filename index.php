<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="css/index.css">
    <title>Linh kiện điện tử</title>
    <link rel="icon" type="image" href="Images/logo/favicon-32x32.png">
    <link rel="stylesheet" href="css/header-footer.css">
    <link rel="stylesheet" href="css/menu.css">

</head>

<body>
    <div class="container">
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
                    <li><a href="index.php">Trang chủ</a></li>
                    <li><a href="pages/menutong/menu.php">Sản phẩm</a></li>
                    <li><a href="pages/Intro.php">Giới thiệu</a></li>
                    <li><a href="pages/Contact.php">Liên hệ</a></li>
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



        <!-- ABOUT  -->
        


        <section class="container1" data-sr-id="4"
            style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: 0.2s, opacity 3s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 3s cubic-bezier(0.5, 0, 0, 1) 0.2s;">
            <div class="main-text">
                <h2 id="">ƯU ĐÃI ĐẶC BIỆT</h2>
                <p></p>
            </div>

            <div class="slide-wrapper" data-sr-id="3"
                style="visibility: visible; opacity: 1; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transition: all, opacity 3s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 3s cubic-bezier(0.5, 0, 0, 1) 0.2s;">
                <div class="slider" style="transform: translateX(-754px);">

                    <img id="slide-1" src="Images/banner.jpg">
                    <img id="slide-2" src="Images/banner2.jpg">


                </div>


                <!-- prev,next -->
                <div class="buttons-home">
                    <div class="btn-left btn1"><i class="fas fa-arrow-left"></i></div>
                    <div class="btn-right btn1"><i class="fas fa-arrow-right"></i></div>
                </div>

                <div class="index-dots">
                    <div class="dots dots-0"></div>
                    <div class="dots dots-1 active"></div>
                    <!-- <div class="dots dots-2"></div> -->

                </div>
            </div>

        </section>

        <section class="product container">
            <div class="title">
                <h1>Sản phẩm nổi bật</h1>

                <div class="product__filter mb-2 text-end">
                    <section class="product-list">
                        <a class="product-link" href="pages/products/banphim1.php">
                            <div class="product-item">
                                <img src="Images/BanPhim/banphim1.png" alt="Bàn phím DAREU EK98 PRO Proto Dream switch"
                                    class="product-image">
                                <h3 class="product-name">Bàn phím DAREU EK98 PRO Proto Dream switch</h3>
                                <p class="product-price">1.250.000₫</p>
                                <button class="add-to-cart">Thêm vào giỏ</button>
                            </div>
                        </a>
                        <a class="product-link" href="pages/products/tainghe1.php">
                            <div class="product-item">

                                <img src="Images/TaiNghe/tainghe3.png"
                                    alt="Cáp Ugreen Type-C to Type-C 60W 1M US264 60518" class="product-image">
                                <h3 class="product-name">Tai nghe SteelSeries Xbox Arctis Nova 5 Black</h3>
                                <p class="product-price">3.490.000₫</p>
                                <button class="add-to-cart">Thêm vào giỏ</button>
                            </div>
                        </a>
                        <a class="product-link" href="pages/products/chuot1.php">
                            <div class="product-item">
                                <img src="Images/Chuot/chuot1.png" alt="Chuột Razer Deathadder V3 Pro Faker Edition"
                                    class="product-image">
                                <h3 class="product-name">Chuột Razer Deathadder V3 Pro Faker Edition</h3>
                                <p class="product-price">3.590.000₫</p>
                                <button class="add-to-cart">Thêm vào giỏ</button>
                            </div>
                        </a>
                        <a class="product-link" href="pages/products/tainghe6.php">
                            <div class="product-item">
                                <img src="Images/TaiNghe/tainghe6.png" alt="Linh Kiện 4" class="product-image">
                                <h3 class="product-name">Tai nghe Corsair Virtuoso RGB Wireless Pearl</h3>
                                <p class="product-price">2.990.000₫</p>
                                <button class="add-to-cart">Thêm vào giỏ</button>
                            </div>
                        </a>
                        <a class="product-link" href="pages/products/loa1.php">
                            <div class="product-item">
                                <img src="Images/Loa/loa1.png"
                                    alt="Loa di động kháng nước IPX6 SOUNARC R2 Portable Speaker - Black"
                                    class="product-image">
                                <h3 class="product-name">Loa di động kháng nước IPX6 SOUNARC R2 Portable Speaker - Black
                                </h3>
                                <p class="product-price">1.790.000₫</p>
                                <button class="add-to-cart">Thêm vào giỏ</button>
                            </div>
                        </a>
                        <a class="product-link" href="pages/products/manhinh1.php">
                            <div class="product-item">
                                <img src="Images/ManHinh/manhinh1.png" alt="Màn hình Asus TUF GAMING VG249Q3A 24" Fast
                                    IPS 180Hz Gsync chuyên game" class="product-image">
                                <h3 class="product-name">Màn hình Asus TUF GAMING VG249Q3A 24" Fast IPS 180Hz Gsync
                                    chuyên
                                    game</h3>
                                <p class="product-price">3.190.000₫</p>
                                <button class="add-to-cart">Thêm vào giỏ</button>
                            </div>
                        </a>
                        <a class="product-link" href="pages/products/thenho256gb.php">
                            <div class="product-item">
                                <img src="Images/TheNho/thenho2.png"
                                    alt="Thẻ nhớ Samsung EVO Plus (New 160MB/s) 250GB MB-MC256SA/APC"
                                    class="product-image">
                                <h3 class="product-name">Thẻ nhớ Samsung EVO Plus (New 160MB/s) 250GB MB-MC256SA/APC
                                </h3>
                                <p class="product-price">709.000₫</p>
                                <button class="add-to-cart">Thêm vào giỏ</button>
                            </div>
                        </a>
                        <a class="product-link" href="pages/products/banphim4.php">
                            <div class="product-item">

                                <img src="Images/BanPhim/banphim4.png"
                                    alt="Bàn phím DareU Không dây EK98 Pro RGB Đen Dream Switch" class="product-image">
                                <h3 class="product-name">Bàn phím DareU Không dây EK98 Pro RGB Đen Dream Switch</h3>
                                <p class="product-price">1.290.000₫</p>
                                <button class="add-to-cart">Thêm vào giỏ</button>

                            </div>
                        </a>

                    </section>
                    <a href="pages/menutong/menu.php">
                        <button class="btn-more">Xem thêm</button>
                    </a>


                </div>
            </div>


            <footer class="footer">
                <div class="footer__container">

                    <div class="footer__section">
                        <h3>HỖ TRỢ</h3>
                        <ul>
                            <li><a href="#">Hướng dẫn mua hàng</a></li>
                            <li><a href="#">Sản phẩm yêu thích</a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100067582450693" target="_blank"><i
                                        class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__section">
                        <h3>TÀI KHOẢN</h3>
                        <ul>
                            <li><a href="pages/SignUp.php">Đăng ký tài khoản</a></li>
                            <li><a href="pages/Login.php">Đăng nhập tài khoản</a></li>
                            <li><a href="pages/Cart.php">Giỏ hàng của bạn</a></li>
                        </ul>
                    </div>
                    <div class="footer__contact">
                        <h3>THÔNG TIN LIÊN HỆ</h3>
                        <p>Giờ làm việc: Thứ 2 - Thứ 7: 8h00 đến 17h30</p>
                        <p>Email: support@gearlab.com</p>
                        <p>Hotline: 1800-1003</p>
                    </div>
                </div>
            </footer>
    </div>
    <div id="loginModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>Vui lòng đăng nhập hoặc đăng ký để
                tiếp tục!</p>
            <a href="pages/Login.php">
                <button class="btn-login">ĐĂNG NHẬP</button>
            </a>
            <a href="pages/SignUp.php">
                <button class="btn-login">ĐĂNG KÝ</button>
            </a>
        </div>
    </div>
</body>
<script src="js/index.js"></script>


</html>