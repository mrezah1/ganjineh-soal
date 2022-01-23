$(document).ready(function () {
    $(function () {
        $("[data-toggle='tooltip']").tooltip();
    });
    $("#MyNavigation>ul>li").mouseenter(function () {
        var leftItem = this.offsetLeft;
        var topItem = this.offsetTop;
        var widthItem = $(this).innerWidth();
        leftItem += 12.5;
        topItem += 33.5;
        widthItem -= 23;
        $(".hover-item").css({
            top: topItem + "px",
            left: leftItem + "px",
            width: widthItem + "px",
            transform: "scale(1)"
        });
    });
    $("#MyNavigation>ul>li").mouseleave(function () {
        $(".hover-item").css({
            transform: "scale(0)"
        });
    });
    $(function () {
        var el = $("#suggestion ul li span");
        for (var i in el) {
            var t = el.eq(i).text();
            el.eq(i).attr("data-max", t);
        }
    });
    $("#toggle-searchBox").click(function () {
        $(".navigation-search").show(500);
    });
    $(".navigation-search button.close").click(function () {
        $(".navigation-search").hide(500);
    });
    $(function () {
        $(".navbar-toggler").click(function () {
            if ($('#MyNavigation').hasClass('show')) {
                $(".bar1").removeClass("hover-bar1");
                $(".bar2").removeClass("hover-bar2");
                $(".bar3").removeClass("hover-bar3");
            } else {
                $(".bar1").addClass("hover-bar1");
                $(".bar2").addClass("hover-bar2");
                $(".bar3").addClass("hover-bar3");
            }
        })
    });
    $("#MyNavigation ul li:nth-child(2)").click(function () {
        $("#MyNavigation ul li .MyDropdown").slideToggle(350);
    });
    $(".message-form").hide();

    $("#login #btn-login").click(function () {
        //$(this).removeClass('justify-content-center');
        if ($('.spinner-border-sm').hasClass('opacity-1')) {
            $('.spinner-border-sm').removeClass('opacity-1');
            $('.spinner-border-sm').addClass('opacity-0');
        }
        else {
            $('.spinner-border-sm').removeClass('opacity-0');
            $('.spinner-border-sm').addClass('opacity-1');
        }
        $('.before-event').css({transform:'scale(1)',opacity:'1'});
        // $("#login .message-form p").text("لورم اپیسورم متن ساختگی با تولید سادگی");
        // $(this).attr("disabled", "disabled");
        // $("#login .pbar").animate({width: "0"}, 0);
        // $("#login .message-form").css("opacity", "1");
        // $("#login .message-form").slideDown(350);
        // $("#login .message-form").delay(6500).slideUp(350);
        // $("#login .pbar").animate({width: "100%"}, 6500);
        // setTimeout(() => {
        //     $(this).removeAttr("disabled");
        // }, 6600);
    });

    $("#register #btn-register").click(function () {
            $("#register .message-form p").text("");
            var username = $("#input-username-register").val();
            var email = $("#input-email-register").val();
            var pass = $("#input-pass-register").val();
            var confirm_pass = $("#confirm-pass-register").val();
            var Trandom = $("#text-random-register").text();
            var inputTrandom = $("#input-TextRandom-register").val();
            // alert(Trandom);
            var value_input = [];
            if (username === null || username === "") {
                value_input.push("نام کاربری خالی است !");
            }
            if (email === null || email === "") {
                value_input.push("ایمیل یا موبایل خالی است !");
            }
            if (pass === null || pass === "") {
                value_input.push(" رمز عبور خالی است !");
            }
            if (confirm_pass === null || confirm_pass === "") {
                value_input.push("تکرار رمز عبور خالی است !");
            }
            if (pass !== confirm_pass) {
                value_input.push(" رمز عبور با تکرار آن همسان نیست !");
            }
            if (inputTrandom === null || inputTrandom === "" || inputTrandom !== Trandom) {
                value_input.push("متن تصادفی وارد نشده یا اشتباه وارد شده است !");
            }
            if (username !== "" && pass !== "" && email !== "" && pass !== "" && pass === confirm_pass &&
                confirm_pass !== "" && inputTrandom === Trandom) {
                $("#register form:first-child").hide(220);
                $("#register form:last-child").show(370);
            }
            $(this).attr("disabled", "disabled");
            $("#register .pbar").animate({width: "0"}, 0);
            $("#register .message-form").css("opacity", "1");
            $("#register .message-form").slideDown(350);
            for (var i = 0; i < value_input.length; i++) {
                $("#register .message-form p").append(value_input[i] + "<br>");
            }
            $("#register .message-form").delay(6500).slideUp(350);
            $("#register .pbar").animate({width: "100%"}, 6500);
            setTimeout(() => {
                $(this).removeAttr("disabled");
            }, 6600)
        });
    $("#btn-message-close").click(function () {
        $("#register .message-form").css("opacity", "0");
        $("#register .pbar").animate({width: "0"}, 0);
    });
    $("#btn-message-close-login").click(function () {
        $("#login .message-form").css("opacity", "0");
        $("#login .pbar").animate({width: "0"}, 0);
    });
    $(".lbl-phone").click(function () {
        $("#input-email-login").focus();
    });
    // form option field
    $("#have-account").click(function () {
        $(".modal-dialog .nav-item:first-child a").click();
    });
    $("#dont-account").click(function () {
        $(".modal-dialog .nav-item:last-child a").click();
    });
    var p = $(".tab-content form div.position-relative");
    $(".tab-content form div.position-relative input").focusin(function () {
        var p = $(this).parent();
        p.find("label").css("top", "-10px");
        p.find("label").addClass("px-2 rounded-lg");
    });
    $(".tab-content form div.position-relative input").focusout(function () {
        var p = $(this).parent();
        if ($(this).val() === "" || $(this).val() === null) {
            p.find("label").css("top", "6px");
            p.find("label").removeClass("px-2 rounded-lg");
        } else {
            p.find("label").css("top", "-10px");
            p.find("label").addClass("px-2 rounded-lg");
        }
    });
    $(".btn-reset").click(function () {
       $("#myModal").click();
    });
    $(function () {
        var p = $(".tab-content form div.position-relative input");
        for (var i = 0; i < p.length; i++) {
            var pi = p.eq(i).attr("id");
            $(".tab-content form div.position-relative label").eq(i).attr("for", pi);
        }
    });
    // $(function () {
    //     for (var i = 1300; i <= 1385; i++) {
    //         $("select.year-birthday").prepend("<option>" + i + "</option>");
    //     }
    //     var oy = $("select.year-birthday option");
    //     for (var i = 0; i <= oy.length; i++) {
    //         oy.eq(i).prop("value", "y" + oy.eq(i).text());
    //     }
    //     for (var j = 1; j <= 10; j++) {
    //         $("select.day-birthday").prepend("<option>" + j + "</option>");
    //     }
    //     var od = $("select.day-birthday option");
    //     for (var j = 0; j <= od.length; j++) {
    //         od.eq(j).prop("value", "d" + (j + 1))
    //     }
    // });

    // credit page
    $("label[for='check-credit']").click(function () {
    // $(function () {
        var ch=$("#check-credit");
        if (ch.is(':checked')){
            $("#wrapper-price-credit").slideDown(180);
        }
        else{
            $("#wrapper-price-credit").slideUp(180);
        }
    });
    $(function () {
        // hide #back-top first
        $("#back-top").hide();                

// fade in #back-top
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });

// scroll body to 0px on click
            $('#back-top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        });
    });
    try {
        $(".chosen-select").chosen({
            disable_search_threshold: 1,
            no_results_text: "مورد یافت نشد !",
            width: "95%"
        });
    }
    catch (e) {
        console.log(e);
    }
    $('.Qdown').click(function () {
        $('.popup-buyQuestion').fadeIn(550);
        $('.popup-buyQuestion div.position-fixed').delay(600).fadeIn(650);
        $('html,body').css({
            height: '100%',
            overflow: 'hidden'
        });
        $('#cancel-buy').click(function () {
            $('.popup-buyQuestion').delay(750).slideUp(550);
            $('.popup-buyQuestion div.position-fixed').fadeOut(650);
            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
        })
    });
    $('.dr-user').click(function () {
        if($('.dr-user ul').hasClass('dr-user-hover-ul')){
            $('.dr-user ul').removeClass('dr-user-hover-ul');
            $('.dr-user>a>i.fa-caret-down').removeClass('rotate180');
        }
        else {
            $('.dr-user ul').addClass('dr-user-hover-ul');
            $('.dr-user>a>i.fa-caret-down').addClass('rotate180');            
        }
    })
});

