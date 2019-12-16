$(function () {
    $("body").on("click", ".name input", function () {
        $(this).focus()
    });
    $("body").on("click", ".phone input", function () {
        $(this).focus()
    });
    $(".popBtn").click(function () {
        $(".jsdpiPop").hide()
    });
    document.getElementById("yalongMask").addEventListener("touchstart", function (i) {
        i.preventDefault();
        i.stopPropagation()
    }, false);
    document.getElementById("yalongMask").addEventListener("touchmove", function (i) {
        i.preventDefault();
        i.stopPropagation()
    }, false);
    document.getElementById("contentI").addEventListener("touchstart", function (i) {
        i.preventDefault();
        i.stopPropagation()
    }, false);
    document.getElementById("contentI").addEventListener("touchmove", function (i) {
        i.preventDefault();
        i.stopPropagation()
    }, false);
    document.getElementById("contentB").addEventListener("touchstart", function (i) {
        i.preventDefault();
        i.stopPropagation()
    }, false);
    document.getElementById("contentB").addEventListener("touchmove", function (i) {
        i.preventDefault();
        i.stopPropagation()
    }, false);
    document.getElementById("close").addEventListener("touchstart", function (i) {
        $(".yalongMask").hide();
        $(".yalongMaskA").hide();
        $("body").css("overflow-y", "auto");
        i.preventDefault();
    }, false);

    $("#yinshiid").on("click", function () {
        $("body").css("overflow-y", "hidden");
        $(".yalongMaskA").show();
        $(".yalongMask").show()
    });
    $(".privacy i").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active")
        } else {
            $(this).addClass("active")
        }
    });
    $(".drive .name div").click(function () {
        $(".drive .name div").removeClass("active");
        $(this).addClass("active")
    });
    var s = "ios";
    var m = "scroller";
    var o = "bottom";
    var v = "zh";
    $("#demo_datetime").mobiscroll().date({
        theme: s,
        mode: m,
        display: o,
        lang: v,
        dateFormat: "yyyy-mm-dd",
        minDate: new Date(2019, 7, 1, 9, 22),
        maxDate: new Date(2030, 7, 30, 15, 44),
        stepMinute: 1
    });

    function a() {
        $.ajax({
            type: "post",
            url: "https://api1.bankexx.com.cn/api/yqft/dealerprovince",
            dataType: "json",
            async: true,
            success: function (y) {
                var x = "";
                for (var w = 1; w < y.data.length; w++) {
                    x += '<li data-id="' + y.data[w].cid + '"><b></b>' + y.data[w].name + "</li>"
                }
                $(".provinceList").html(x);
                $(".change ul li").off("click");
                $(".change ul li").on("click", function () {
                    $(this).parent().parent().find("span").html($(this).text());
                    $(this).parent().parent().find("div").attr("data-id", $(this).attr("data-id"));
                    if ($(this).parent().parent().find("div").hasClass("province")) {
                        c()
                    }
                    if ($(this).parent().parent().find("div").hasClass("region")) {
                        h()
                    }
                    $(".change ul").hide();
                    $(".jiao").removeClass("active");
                    return false
                })
            },
            error: function (i) {
            }
        })
    }

    function c() {
        $(".region span").html("请选择市/区");
        $.ajax({
            type: "post",
            url: "https://api1.bankexx.com.cn/api/yqft/dealercity",
            dataType: "json",
            data: {cid: $(".province").attr("data-id")},
            async: true,
            success: function (y) {
                var x = "";
                for (var w = 0; w < y.data.length; w++) {
                    x += '<li data-id="' + y.data[w].cid + '" data-parentid="' + y.data[w].parentid + '"><b></b>' + y.data[w].name + "</li>"
                }
                $(".regionList").html(x);
                if (y.data.length == 1) {
                    $(".region span").html(y.data[0].name);
                    $(".region").attr("data-id", y.data[0].cid);
                    h()
                }
                $(".change ul li").off("click");
                $(".change ul li").on("click", function () {
                    $(this).parent().parent().find("span").html($(this).text());
                    $(this).parent().parent().find("div").attr("data-id", $(this).attr("data-id"));
                    if ($(this).parent().parent().find("div").hasClass("province")) {
                        c()
                    }
                    if ($(this).parent().parent().find("div").hasClass("region")) {
                        h()
                    }
                    $(".change ul").hide();
                    $(".jiao").removeClass("active");
                    return false
                })
            },
            error: function (i) {
            }
        })
    }

    function h() {
        $(".agencyA  span").html("请选择经销商");
        $.ajax({
            type: "post",
            url: "https://api1.bankexx.com.cn/api/yqft/dealer",
            dataType: "json",
            data: {cid: $(".region").attr("data-id")},
            async: true,
            success: function (y) {
                var x = "";
                for (var w = 0; w < y.data.length; w++) {
                    x += '<li data-id="' + y.data[w].code + '"><b></b>' + y.data[w].name + "</li>"
                }
                $(".agencyList").html(x);
                if (y.data.length == 1) {
                    $(".agencyA  span").html(y.data[0].name);
                    $(".agencyA ").attr("data-id", y.data[0].cid)
                }
                $(".change ul li").off("click");
                $(".change ul li").on("click", function () {
                    $(this).parent().parent().find("span").html($(this).text());
                    $(this).parent().parent().find("div").attr("data-id", $(this).attr("data-id"));
                    if ($(this).parent().parent().find("div").hasClass("province")) {
                        c()
                    }
                    if ($(this).parent().parent().find("div").hasClass("region")) {
                        h()
                    }
                    $(".change ul").hide();
                    $(".jiao").removeClass("active");
                    return false
                })
            },
            error: function (i) {
            }
        })
    }

    function e() {
        $.ajax({
            type: "post",
            url: "https://api1.bankexx.com.cn/api/yqft/getLeadLevel",
            dataType: "json",
            async: true,
            success: function (y) {
                var x = "";
                for (var w = 0; w < y.data.length; w++) {
                    x += '<li data-id="' + y.data[w].id + '"><b></b>' + y.data[w].description + "</li>"
                }
                $(".saleTimeList").html(x);
                $(".change ul li").off("click");
                $(".change ul li").on("click", function () {
                    $(this).parent().parent().find("span").html($(this).text());
                    $(this).parent().parent().find("div").attr("data-id", $(this).attr("data-id"));
                    if ($(this).parent().parent().find("div").hasClass("province")) {
                        c()
                    }
                    if ($(this).parent().parent().find("div").hasClass("region")) {
                        h()
                    }
                    $(".change ul").hide();
                    $(".jiao").removeClass("active");
                    return false
                })
            },
            error: function (i) {
            }
        })
    }

    $(".change div").on("click", function () {
        if ($(this).hasClass("province")) {
            a()
        }
        if ($(this).hasClass("saleTime")) {
            e()
        }
        if ($(this).hasClass("region")) {
            if (!$(".province").attr("data-id")) {
                $(".jsdpiPop").show();
                $(".jsdpiPop .pB").html("请选择省份");
                return false
            }
        }
        if ($(this).hasClass("agencyA")) {
            if (!$(".province").attr("data-id")) {
                $(".jsdpiPop").show();
                $(".jsdpiPop .pB").html("请选择省份");
                return false
            }
            if (!$(".region").attr("data-id")) {
                $(".jsdpiPop").show();
                $(".jsdpiPop .pB").html("请选择市/区");
                return false
            }
        }
        if ($(this).parent().find("ul").css("display") == "none") {
            $(".change ul").hide();
            $(this).find(".jiao").addClass("active");
            $(this).parent().find("ul").show()
        } else {
            $(".change ul").hide();
            $(".jiao").removeClass("active")
        }
    });
    $(".change ul li").off("click");
    $(".change ul li").on("click", function () {
        $(this).parent().parent().find("span").html($(this).text());
        $(this).parent().parent().find("div").attr("data-id", $(this).attr("data-id"));
        if ($(this).parent().parent().find("div").hasClass("province")) {
            c()
        }
        if ($(this).parent().parent().find("div").hasClass("region")) {
            h()
        }
        $(".change ul").hide();
        $(".jiao").removeClass("active");
        return false
    });
    $(".goBtn").on("click", function () {
        function x(y) {
            if (y == null || y == "" || y == "undefined" || y == undefined || y == "null" || y == "(null)" || y == "NULL" || typeof(y) == "undefined") {
                return false
            } else {
                y = y + "";
                y = y.replace(/\s/g, "");
                if (y == "") {
                    return false
                }
                return true
            }
        }

        if (x($(".name input").val().trim()) == false) {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pB").html("请填写您的姓名");
            return false
        }

        function i(y) {
            var z = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if (!z.test(y)) {
                return false
            }
            return true
        }

        if (i($(".phone input").val().trim()) == false) {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pB").html("请填写您的手机号");
            return false
        }
        if ($(".province span").html().trim() == "请选择省份") {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pB").html("请选择省份");
            return false
        }
        if ($(".region span").html().trim() == "请选择市/区") {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pB").html("请选择市/区");
            return false
        }
        if ($(".agencyA span").html().trim() == "请选择经销商") {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pB").html("请选择经销商");
            return false
        }
        if ($(".type span").html().trim() == "请选择车型") {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pB").html("请选择车型");
            return false
        }
        if ($(".orderTime input").val().trim() == "请选择预约时间") {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pB").html("请选择预约时间");
            return false
        }
        if ($(".saleTime span").html().trim() == "请选择您计划的购车时间") {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pB").html("请选择您计划的购车时间");
            return false
        }
        if (!$(".privacy i").hasClass("active")) {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pB").html("请您阅读并勾选《隐私政策》");
            return false
        }

        function w(A) {
            var z = window.location.search;
            var y = new RegExp("" + A + "=([^&?]*)", "ig");
            return ((z.match(y)) ? (z.match(y)[0].substr(A.length + 1)) : null)
        }

        $.ajax({
            type: "post",
            url: "https://api1.bankexx.com.cn/api/yqft/addUser",
            dataType: "json",
            async: true,
            data: {
                "name": $(".name input").val().trim(),
                "phone": $(".phone input").val().trim(),
                "sex": $(".name div").eq(1).html() == "男" ? 1 : 2,
                "province_id": $(".province").attr("data-id"),
                "province_name": $(".province span").html(),
                "city_id": $(".region").attr("data-id"),
                "city_name": $(".region span").html(),
                "dealer_id": $(".agencyA").attr("data-id"),
                "dealer_name": $(".agencyA span").html(),
                "series_id": $(".type").attr("data-id"),
                "series_name": $(".type span").html(),
                "level_id": $(".saleTime").attr("data-id"),
                "level_name": $(".saleTime span").html(),
                "drive_time": new Date($(".orderTime input").val()).getTime() / 1000,
                "media_id": x(w("media")) ? w("media") : 0,
            },
            success: function (y) {
                if (y.code == 0) {
                    $(".jsdpiPop").show();
                    $(".jsdpiPop .pB").html("预约成功");
                    return false
                } else {
                    $(".jsdpiPop").show();
                    $(".jsdpiPop .pB").html("预约成功请您重新预约");
                    return false
                }
            },
            error: function (y) {
                $(".jsdpiPop").show();
                $(".jsdpiPop .pB").html("预约成功请您重新预约");
                return false
            }
        })
    });
    for (var p = 0; p < $(".typeNameDetail").length; p++) {
        if ($(".typeNameDetail").eq(p).find("p").eq(0).height() > $(".typeNameDetail").eq(p).find("p").eq(1).height()) {
            $(".typeNameDetail").eq(p).find("p").eq(1).css("height", $(".typeNameDetail").eq(p).find("p").eq(0).height());
            $(".typeNameDetail").eq(p).find("p").eq(1).css("line-height", $(".typeNameDetail").eq(p).find("p").eq(0).height() + "px")
        }
        if ($(".typeNameDetail").eq(p).find("p").eq(1).height() > $(".typeNameDetail").eq(p).find("p").eq(0).height()) {
            $(".typeNameDetail").eq(p).find("p").eq(0).css("height", $(".typeNameDetail").eq(p).find("p").eq(1).height());
            $(".typeNameDetail").eq(p).find("p").eq(0).css("line-height", $(".typeNameDetail").eq(p).find("p").eq(1).height() + "px")
        }
    }
    $(".changeTypeName").off("click");
    $(".changeTypeName").on("click", function () {
        if ($(this).parent().find("ul").css("display") == "none") {
            $(".changeType ul").hide();
            $(this).parent().find("ul").show();
            $(this).find(".jiao").addClass("active")
        } else {
            $(".changeType ul").hide();
            $(".jiao").removeClass("active")
        }
    });
    $(".changeType ul li").off("click");
    $(".changeType ul li").on("click", function () {
        $(this).parent().parent().find("span").html($(this).text());
        $(this).parent().parent().find("div").attr("data-id", $(this).attr("data-id"));
        $(".changeType ul").hide();
        $(".typeDetail").hide();
        $(".jiao").removeClass("active");
        $(".typeDetail").eq($(this).attr("data-id")).show();
        for (var w = 0;
             w < $(".typeDetail").eq($(this).attr("data-id")).find(".typeNameDetail").length; w++) {
            if ($(".typeDetail").eq($(this).attr("data-id")).find(".typeNameDetail").eq(w).find("p").eq(0).height() > $(".typeDetail").eq($(this).attr("data-id")).find(".typeNameDetail").eq(w).find("p").eq(1).height()) {
                $(".typeDetail").eq($(this).attr("data-id")).find(".typeNameDetail").eq(w).find("p").eq(1).css("height", $(".typeDetail").eq($(this).attr("data-id")).find(".typeNameDetail").eq(w).find("p").eq(0).height());
                $(".typeDetail").eq($(this).attr("data-id")).find(".typeNameDetail").eq(w).find("p").eq(1).css("line-height", $(".typeDetail").eq($(this).attr("data-id")).find(".typeNameDetail").eq(w).find("p").eq(0).height() + "px")
            }
            if ($(".typeDetail").eq($(this).attr("data-id")).find(".typeNameDetail").eq(w).find("p").eq(1).height() > $(".typeDetail").eq($(this).attr("data-id")).find(".typeNameDetail").eq(w).find("p").eq(0).height()) {
                $(".typeDetail").eq($(this).attr("data-id")).find(".typeNameDetail").eq(w).find("p").eq(0).css("height", $(".typeDetail").eq($(this).attr("data-id")).find(".typeNameDetail").eq(w).find("p").eq(1).height());
                $(".typeDetail").eq($(this).attr("data-id")).find(".typeNameDetail").eq(w).find("p").eq(0).css("line-height", $(".typeDetail").eq($(this).attr("data-id")).find(".typeNameDetail").eq(w).find("p").eq(1).height() + "px")
            }
        }
    });
    var l = true;
    var b = 5;
    var f = true;
    var g = true;
    var j;
    var k = null;
    j = $(".slide .img").length;
    for (p = 0; p < j; p++) {
        $(".slide .img:eq(" + p + ")").attr("data-slide-imgId", p)
    }
    $(window).scroll(function (w) {
        var i = document.body.scrollTop == 0 ? document.documentElement.scrollTop : document.body.scrollTop;
        if (i < 300 || i > 1100) {
            l = true;
            if (l) {
                clearInterval(k);
                k = setInterval(function () {
                    r()
                }, b * 1000)
            }
        }
    });
    if (j == 1) {
        for (p = 0; p < j; p++) {
            $(".slide .img:eq(" + p + ")").addClass("img3")
        }
    }
    if (j == 2) {
        for (p = 0; p < j; p++) {
            $(".slide .img:eq(" + p + ")").addClass("img" + (p + 3))
        }
    }
    if (j == 3) {
        for (p = 0; p < j; p++) {
            $(".slide .img:eq(" + p + ")").addClass("img" + (p + 2))
        }
    }
    if (j > 3 && j < 6) {
        for (p = 0; p < j; p++) {
            $(".slide .img:eq(" + p + ")").addClass("img" + (p + 1))
        }
    }
    if (j >= 6) {
        for (p = 0; p < j; p++) {
            if (p < 5) {
                $(".slide .img:eq(" + p + ")").addClass("img" + (p + 1))
            } else {
                $(".slide .img:eq(" + p + ")").addClass("img5")
            }
        }
    }
    if (g) {
        for (p = 1; p <= j; p++) {
            $(".slide-bt").append("<span data-slide-bt='" + p + "' onclick='tz(" + p + ")'></span>")
        }
        $(".slide-bt").width(j * 16 / 100 * 2 + "rem");
        $(".slide-bt").css("margin-left", "-" + j * 8 / 100 * 2 + "rem")
    }
    if (l) {
        k = setInterval(function () {
            r()
        }, b * 1000)
    }
    if (f) {
        u()
    }
    t();
    n();

    function r() {
        clearInterval(k);
        var i = new Array();
        for (p = 0; p < j; p++) {
            i[p] = $(".slide .img[data-slide-imgId=" + p + "]").attr("class")
        }
        for (p = 0; p < j; p++) {
            if (p == 0) {
                $(".slide .img[data-slide-imgId=" + p + "]").attr("class", i[j - 1])
            } else {
                $(".slide .img[data-slide-imgId=" + p + "]").attr("class", i[p - 1])
            }
        }
        n();
        t();
        if (l) {
            k = setInterval(function () {
                r()
            }, b * 1000)
        }
    }

    function d() {
        clearInterval(k);
        var i = new Array();
        for (p = 0; p < j; p++) {
            i[p] = $(".slide .img[data-slide-imgId=" + p + "]").attr("class")
        }
        for (p = 0; p < j; p++) {
            if (p == (j - 1)) {
                $(".slide .img[data-slide-imgId=" + p + "]").attr("class", i[0])
            } else {
                $(".slide .img[data-slide-imgId=" + p + "]").attr("class", i[p + 1])
            }
        }
        n();
        t();
        if (l) {
            k = setInterval(function () {
                r()
            }, b * 1000)
        }
    }

    function n() {
        $(".slide .img").removeAttr("onclick");
        $(".slide .img2").attr("onclick", "left()");
        $(".slide .img4").attr("onclick", "right()")
    }

    function t() {
        var x = parseInt($(".slide .img3").attr("data-slide-imgId"));
        $(".content li p").removeClass("active");
        $(".bottomBtn p").removeClass("active");
        for (var w = 0; w < $(".content li").length; w++) {
            if ($(".content li").eq(w).attr("data-id") == x) {
                $(".content li").eq(w).find("p").addClass("active");
                $(".bottomBtn p").eq(w).addClass("active")
            }
        }
    }

    function q(w) {
        var i = w - (parseInt($(".slide .img3").attr("data-slide-imgId")) + 1);
        if (i > 0) {
            for (p = 0; p < i; p++) {
                setTimeout(function () {
                    r()
                }, 1)
            }
        }
        if (i < 0) {
            i = (-i);
            for (p = 0; p < i; p++) {
                setTimeout(function () {
                    d()
                }, 1)
            }
        }
        t()
    }

    $(".vehicleModel .bottomBtn p").click(function () {
        clearInterval(k);
        l = false;
        $(".vehicleModel .bottomBtn p").removeClass("active");
        $(this).addClass("active");
        $(".vehicleModel .content li p").removeClass("active");
        $(".vehicleModel .list").removeClass("img3");
        for (var w = 0; w < $(".content li").length; w++) {
            if ($(".content li").eq(w).attr("data-id") == $(this).attr("data-ida")) {
                $(".content li").eq(w).find("p").addClass("active")
            }
            if ($(".vehicleModel .list").eq(w).attr("data-slide-imgid") == $(this).attr("data-ida")) {
                $(".vehicleModel .list").eq(w).addClass("img3")
            }
        }
    });
    $(".vehicleModel .content p").click(function () {
        clearInterval(k);
        l = false;
        $(".vehicleModel .content p").removeClass("active");
        $(this).addClass("active");
        $(".vehicleModel .bottomBtn p").removeClass("active");
        $(".vehicleModel .list").removeClass("img3");
        for (var w = 0; w < $(".bottomBtn p").length; w++) {
            if ($(".bottomBtn p").eq(w).attr("data-ida") == $(this).parent().attr("data-id")) {
                $(".bottomBtn p").eq(w).addClass("active")
            }
            if ($(".vehicleModel .list").eq(w).attr("data-slide-imgid") == $(this).parent().attr("data-id")) {
                $(".vehicleModel .list").eq(w).addClass("img3")
            }
        }
    });

    function u() {
    }
});