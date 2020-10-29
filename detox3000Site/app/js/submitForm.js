$(document).ready(function () {

    //E-mail Ajax Send
    $(".page-thirteen__form-one").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Спасибо! Ваше сообщение отправлено!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
                //$('.litebox').removeClass('active');
            }, 400);
        });
        return false;
    });

    //E-mail Ajax Send
    $(".page-thirteen__form-two").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Спасибо! Ваше сообщение отправлено!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
                //$('.litebox').removeClass('active');
            }, 400);
        });
        return false;
    });

});