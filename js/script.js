// ************************ハンバーガーメニュー bgn*********************
$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $(this).toggleClass('active');
        var $menu = $('.slide-menu');
        if ($menu.css('right') === '-50vw') {
            $menu.css('right', '0');
        } else {
            $menu.css('right', '-50vw');
        }
    });
});
// ************************ハンバーガーメニュー end*********************/
// / ***************img-message bgn******************
$(function() {
    // ページ読み込み後2秒待ってからアニメーション開始
    setTimeout(function() {
        $(".img-message p").each(function(index) {
            $(this).delay(index * 1500).queue(function(next) {
                $(this).addClass("visible");
                next();
            });
        });
    }, 1000); // 2000msの遅延を追加
});
// ***************img-message end******************


// ************************img fade effect bgn*************************
$(function(){
    $(window).on("scroll load", function(){
        $(".fade-in").each(function(){
            if ($(window).scrollTop() > $(this).offset().top - $(window).height() + $(window).height()/5 ){
                $(this).css({transform: "translate(0,0)", opacity:1})
            }
        });
    });
});
// *****************************img fade effect end******************************
// ******************************nav-barの表示 bgn*****************************************
$(function () {
    let threshold = 10;

    $(window).scroll(function () {
        let currentScrollTop = $(this).scrollTop();

        if (currentScrollTop <= 0) {
            $(".header-bg, .hamburger span").removeClass("visible");
            // ナビの色は自動的にCSSのトランジションで戻る
            return;
        }

        if (currentScrollTop > threshold) {
            $(".header-bg, .hamburger span").addClass("visible");
            // ナビの色は自動的にCSSのトランジションで変化
        }
    });
});
// ******************************nav-barの表示 end*****************************************

// **************************fade-text bgn*****************************
document.addEventListener("DOMContentLoaded", function() {
    const messageContent = document.querySelector(".message-content");
    const paragraphs = messageContent.querySelectorAll("p");

    paragraphs.forEach((paragraph, index) => {
        paragraph.classList.add("fade-in-line");
        paragraph.style.transitionDelay = `${index * 0.7}s`;
    });

    window.addEventListener("scroll", function() {
        const rect = messageContent.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            paragraphs.forEach(paragraph => {
                paragraph.classList.add("visible");
            });
        }
    });
});
// ***************************fade-text end****************************
// ***************************back to top bgn**************************
$(function() {
    // スクロールイベント
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 500) {
            $("#page-top").addClass("show");
        } else {
            $("#page-top").removeClass("show");
        }
    });

    // クリックイベント
    $("#page-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500); // 500msかけてトップへ移動
        return false;
    });
});
// ***************************back to top end**************************
// **********************achievements animation bgn********************
$(function() {
    // スクロール時のアニメーション
    $(window).scroll(function() {
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        let elemPos = $(".achievement-numbers").offset().top;

        if (scroll > elemPos - windowHeight + 200) {
            $(".count-up").each(function() {
                let $this = $(this);
                if (!$this.hasClass("counted")) {
                    $this.addClass("counted");
                    let target = $this.data("target");
                    $({ Counter: 0 }).animate({ Counter: target }, {
                        duration: 2000,
                        easing: "swing",
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                }
            });
        }
    });
});
// **********************achievements animation end********************
// ***************************recruit-page bgn*******************************
// 既存のコードの後に以下を追加

// Interview Slider Initialization
$(document).ready(function() {
    if ($(".interview-slider").length) {  // スライダー要素の存在確認
        $(".interview-slider").slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: true,
            adaptiveHeight: true,  // 追加：高さの自動調整
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    }
});

// FAQ Accordion
$(function() {
    $(".faq-question").click(function(){
        // 現在のFAQアイテム
        const currentItem = $(this).parent();
        
        // アニメーションが実行中かどうかをチェック
        if (currentItem.find(".faq-answer").is(":animated")) {
            return;
        }

        // クリックされたアイテムが既にアクティブな場合
        if (currentItem.hasClass("active")) {
            currentItem.removeClass("active");
            currentItem.find(".faq-answer").slideUp(300);
        } else {
            // 他のアクティブなアイテムを閉じる
            $(".faq-item.active").removeClass("active").find(".faq-answer").slideUp(300);
            
            // クリックされたアイテムを開く
            currentItem.addClass("active");
            currentItem.find(".faq-answer").slideDown(300);
        }
    });
});

// スムーズスクロール (採用情報ページのアンカーリンク用)
$(function() {
    $('a[href^="#"]').click(function(){
        const speed = 500;
        const href = $(this).attr("href");
        const target = $(href === "#" || href === "" ? "html" : href);
        const position = target.offset().top - 80; // ヘッダーの高さ分を考慮
        $("html, body").animate({scrollTop: position}, speed, "swing");
        return false;
    });
});

// 数値のカウントアップアニメーション（採用実績などの数字用）
$(function() {
    $(".count-up").each(function(){
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: "swing",
            step: function(now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});

// *****************************recruit-page end*******************************
// *******************************gallery bgn**********************************
$(function() {
    $(".gallery-slider").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2300,
        draggable: false,
        swipe: false,
        touchMove: false,
        swipeToSlide: false, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            // {
            //     breakpoint: 430,
            //     settings: {
            //         slidesToShow: 1,
            //         arrows: false
            //     }
            // }
        ]
    });
});
// modal
$(function() {
    let currentIndex;

    // モーダルを開く
    $(".gallery-item").click(function() {
        currentIndex = $(this).closest(".slick-slide").data("slick-index");
        const imgSrc = $(this).find("img").attr("src");
        $(".modal-img").attr("src", imgSrc);
        $(".gallery-modal").addClass("show");
    });

    // モーダルを閉じる
    $(".modal-close, .gallery-modal").click(function(e) {
        if (e.target !== $(".modal-img")[0] && !$(e.target).is(".modal-prev, .modal-next")) {
            $(".gallery-modal").removeClass("show");
        }
    });

    // 前の画像へ
    $(".modal-prev").click(function(e) {
        e.stopPropagation();
        $(".gallery-slider").slick("slickPrev");
        updateModalImage();
    });

    // 次の画像へ
    $(".modal-next").click(function(e) {
        e.stopPropagation();
        $(".gallery-slider").slick("slickNext");
        updateModalImage();
    });

    // モーダル画像の更新
    function updateModalImage() {
        const $currentSlide = $(".gallery-slider").find(".slick-current");
        const imgSrc = $currentSlide.find("img").attr("src");
        $(".modal-img").attr("src", imgSrc);
    }
});
// *****************************gallery end*******************************