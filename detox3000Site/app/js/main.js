$(function () {
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: true
    });

    $('.page-ten__video-slider').slick({
        arrows: false,
        dots: true
    });
});

$('.page-six__img-1').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
});

$('.page-six__item-two__img').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    }
});

const shot1 = document.querySelector('.page-two__shot-1'),
    shot2 = document.querySelector('.page-two__shot-2'),
    shot3 = document.querySelector('.page-two__shot-3'),
    shot4 = document.querySelector('.page-two__shot-4'),
    shot5 = document.querySelector('.page-two__shot-5'),
    shot6 = document.querySelector('.page-two__shot-6'),
    shot7 = document.querySelector('.page-two__shot-7'),
    shot8 = document.querySelector('.page-two__shot-8'),
    shot9 = document.querySelector('.page-two__shot-9'),
    shot10 = document.querySelector('.page-two__shot-10'),
    shotMain = document.querySelector('.page-two__shot-main'),
    continMain = document.querySelector('.page-ten__continuation'),
    continText = document.querySelector('.page-ten__continuation-text'),
    contin = document.querySelector('.page-ten__continuation-blue'),
    minus = document.querySelector('.page-twelve__inner-minus-box'),
    plus = document.querySelector('.page-twelve__inner-plus'),
    val = document.querySelector('.page-twelve__inner-numeral'),
    finalSum = document.querySelector('.page-twelve__inner-number'),
    mainBox = document.querySelector('.page-two__main-box'),
    mainLink = document.querySelector('.main-link');

window.addEventListener('scroll', function () {
    function addedActive() {
        mainBox.classList.add("active");
    }
    //console.log(pageYOffset)
    if (pageYOffset >= 250) {
        shot1.classList.add("active");
        shot2.classList.add("active");
        shot3.classList.add("active");
        shot4.classList.add("active");
        shot5.classList.add("active");
        shot6.classList.add("active");
        shot7.classList.add("active");
        shot8.classList.add("active");
        shot9.classList.add("active");
        shot10.classList.add("active");
        shotMain.classList.add("active");
        setTimeout(addedActive, 6000);
    }
});

contin.onclick = function () {
    continMain.classList.add("hidd");
    continText.classList.add("show");
}

function getHesh() {
    let num = val.value;
    //console.log(num);
    //console.log(mainLink.removeAttribute('href'))

    switch (num) {
        case '1':
            mainLink.setAttribute('href', 'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=russkashi&InvId=0&Culture=ru&Encoding=utf-8&OutSum=2000&SignatureValue=12874da6c06d9da32097f47425c45539');
            break;
        case '2':
            mainLink.setAttribute('href', 'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=russkashi&InvId=0&Culture=ru&Encoding=utf-8&OutSum=4000&SignatureValue=23d09f017679671367428424ba603eca');
            break;
        case '3':
            mainLink.setAttribute('href', 'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=russkashi&InvId=0&Culture=ru&Encoding=utf-8&OutSum=6000&SignatureValue=3eab6d125c2062bb093657eda02c1be3');
            break;
        case '4':
            mainLink.setAttribute('href', 'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=russkashi&InvId=0&Culture=ru&Encoding=utf-8&OutSum=8000&SignatureValue=39d916a4e9de32197dfb6c2dc01c9a70');
            break;
        case '5':
            mainLink.setAttribute('href', 'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=russkashi&InvId=0&Culture=ru&Encoding=utf-8&OutSum=10000&SignatureValue=69db81d7f0e886bf95dc38d1b1f1d5d6');
            break;
        case '6':
            mainLink.setAttribute('href', 'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=russkashi&InvId=0&Culture=ru&Encoding=utf-8&OutSum=12000&SignatureValue=5f8fcb89c8692419ad79739b6d2d8aa6');
            break;
        case '7':
            mainLink.setAttribute('href', 'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=russkashi&InvId=0&Culture=ru&Encoding=utf-8&OutSum=14000&SignatureValue=f039078eb450e67a388cdcaf705125fb');
            break;
        case '8':
            mainLink.setAttribute('href', 'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=russkashi&InvId=0&Culture=ru&Encoding=utf-8&OutSum=16000&SignatureValue=bbe9932f15ddcc98df52389ed9fced58');
            break;
        case '9':
            mainLink.setAttribute('href', 'https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=russkashi&InvId=0&Culture=ru&Encoding=utf-8&OutSum=18000&SignatureValue=f5f21d576e5962803c552f77d129aeaf');
            break;
    }
}

minus.onclick = function () {
    if (val.value > 1) {
        val.value = Number(val.value) - 1;
        finalSum.value = Number(finalSum.value) - 2000;
        getHesh();
    }
}

plus.onclick = function () {
    if (val.value < 9) {
        val.value = Number(val.value) + 1;
        finalSum.value = Number(finalSum.value) + 2000;
        getHesh();
    }
}

$(document).ready(function () {

    //E-mail Ajax Send
    $(".page-eleven__form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Спасибо! Ваша заявка отправлена!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 400);
        });
        return false;
    });

});