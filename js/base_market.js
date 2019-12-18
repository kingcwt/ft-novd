/**
 */
var userObj = {};
$(document).ready(function () {
    userObj.ActivitiesID = 20191022 ;
    userObj.checkBtn = false;
    userObj.ckbtn = false;
    userObj.questUrl ="https://a.mtty.com/openapi/common/webtool/sendToFengtian";
    userObj.txtArr = [$('#LoginName').val(),
        $('#LoginPhone').val(),
        $('#sex option:selected').text(),
        $('#prov option:selected').text(),
        $('#city option:selected').text(),
        $('#dealer option:selected').text()];
    $('#denging').on("click", subForm);
    $(".placeholder").each(function (i) {
        var defaultval = $(".placeholder").eq(i).val();
        $(this).bind({
            focus: function () {
                if ($(this).val() == defaultval) {
                    $(this).val("")
                }
            },
            blur: function () {
                if ($(this).val() == "") {
                    $(this).val(defaultval)
                }
            }
        })
    });
    $(".placeholder").each(function (i) {
        var defaultval = $(".placeholder").eq(i).val();
        $(this).bind({
            focus: function () {
                if ($(this).val() == defaultval) {
                    $(this).val("")
                }
            },
            blur: function () {
                if ($(this).val() == "") {
                    $(this).val(defaultval)
                }
            }
        })
    });
});


function subForm() {

    var timestamp3 = new Date().getTime();
    userObj.mediaLeadId='161C09E54CA90DC1B6AAE7A90105CB3B';//timestamp3;
    userObj.mediaLeadType='2019年11月奕泽GAS APP投放';
    userObj.channelKeyId=0;
    userObj.seriesId=32;
    userObj.name = $('#LoginName').val();
    userObj.phone = $('#LoginPhone').val() ;
    userObj.sex = $('#sex option:selected').val() ;
    userObj.sexText = $('#sex option:selected').text() ;

    userObj.provId = $('#ftms_province option:selected').val();
    userObj.provText = $('#ftms_province option:selected').text();
    userObj.cityId = $('#ftms_city option:selected').val();
    userObj.cityText = $('#ftms_city option:selected').text();

    userObj.dealerId = $('#ftms_dealer option:selected').val();
    userObj.chexingId ='32';//todo
    userObj.levelId = '0';//todo
    userObj.activity=767;//todo

    userObj.prov =  $('#ftms_province option:selected').text() ;
    userObj.city =  $('#ftms_city option:selected').text() ;
    userObj.chexing = '奕泽GAS' ;
    userObj.dealer =  $('#ftms_dealer option:selected').text() ;
    if (checkFrom(userObj)) {
        for (var u in userObj) {
            userObj[u] = userObj[u] == undefined ? "" : userObj[u];
        }
        dengingLogin(userObj);
    }
}

function validateMobile(mobile) {
    if (!(/^1[34578]\d{9}$/.test(mobile))) {
        return false
    }
    return true;
}

/*
 注册表单验证
 */
function checkFrom(userObj) {
    if (exist("LoginName")) {
        if (userObj.name == "" || userObj.name=='姓名') {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pC").html("请填写姓名");
            $('#LoginName').focus();
            return false;
        } else {
            if (GetStringRealLength(userObj.name) > 20) {
                $(".jsdpiPop").show();
                $(".jsdpiPop .pC").html("请输入正确的姓名");
                $('#LoginName').focus();
                return false;
            }
        }
    }

    if (exist("sex")) {
        if (userObj.sex == "0") {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pC").html("请选择称谓");
            return false;
        }
    }

    if (exist("LoginPhone")) {
        if (userObj.phone == "" || userObj.phone == "手机") {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pC").html("请填写手机号");
            $('#LoginPhone').focus();
            return false;
        } else {
            if (!validateMobile(userObj.phone)) {
                $(".jsdpiPop").show();
                $(".jsdpiPop .pC").html("请填写正确的手机号，如:13012345678");
                $('#LoginPhone').focus();
                return false;
            }
        }
    }

    if (exist("ftms_province")) {
        if (userObj.prov == "请选择省份") {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pC").html("请选择省份");
            return false;
        }
    }
    if (exist("ftms_city")) {
        if (userObj.city == "请选择城市") {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pC").html("请选择城市");
            return false;
        }
    }

    if (exist("ftms_dealer")) {
        if (userObj.dealer == "请选择经销商") {
            $(".jsdpiPop").show();
            $(".jsdpiPop .pC").html("请选择经销商");
            return false;
        }
    }

    if (!$('.agree_input_xy').is(':checked')) {
        $(".jsdpiPop").show();
        $(".jsdpiPop .pC").html("请确认：我已阅读并同意《隐私政策》里的各项内容");
        return false;
    }
    return true;
}
/*
 注册表单重置
 */
function Empty() {
    $('#LoginName').val(userObj.txtArr[0]);
    $('#LoginPhone').val(userObj.txtArr[1]);
    $('#sex').val('0');
    $('#ftms_province').val('0');
    $('#ftms_city').empty().html('<option value="">请选择城市</option>');
    $('#ftms_dealer').empty().html('<option value="0">请选择经销商</option>');
}
/*
 注册表单提交
 */

function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

var Putm_source=getQueryString('utm_source'),
    Putm_medium=getQueryString('utm_medium'),
    Pid=getQueryString('id')||new Date().getTime();

function dengingLogin(userObj) {


    var body ="mediaLeadId="+userObj.mediaLeadId+"&mediaLeadType="+userObj.mediaLeadType+"&channelKeyId=" +
        userObj.channelKeyId+
        "&name="+userObj.name+"&phone="+userObj.phone+
        "&sex="+userObj.sex+"&provId="+userObj.provId+"&cityId="+userObj.cityId+"&" +
        "dealerId="+userObj.dealerId+"&chexingId="+userObj.chexingId+"&levelId="+
        userObj.levelId+"&activity="+userObj.activity+"&advid=1288"+"&seriesId="+userObj.seriesId+"&traceid=1050"+"&tag=奕泽GAS";
    if (userObj.checkBtn == false) {
        userObj.checkBtn = true;
        $.getJSON(userObj.questUrl, body, function (data) {
            if (data.status==1) {
                userObj.checkBtn = false;
                _mtq.push(['setGeneral', 'udefine', '1050',
                    /*姓名*/userObj.name, /**/'',
                    /*手机号*/userObj.phone, /*称谓*/userObj.sex, /*省*/userObj.provId,
                    /*市*/userObj.cityId, /*经销商*/userObj.dealerId, /*车型*/userObj.chexingId,
                    /*购车时间*/userObj.levelId, /**/'奕泽IZOA']);
                mt_tracker.track(_mtq);
                $.post('//landingpage.xiaoyun.com/landings/push/landpage/entry/1174', {utm_source:Putm_source,utm_medium:Putm_medium,id:Pid,flnm: userObj.name+'('+userObj.sexText+')', mob: userObj.phone ,tags: ['丰田-奕泽IZOA ',userObj.provText+'-'+userObj.cityText+'-',userObj.dealer]});
                window.ga&&window.ga('send','event',`${Pid}`,'submit_form',1);
                // $.fn.xy(
                //     {
                //         name: userObj.name, phone: userObj.phone, sex: userObj.sex,
                //         cityId: userObj.cityId, dealerId: $('#ftms_dealer').find('option:selected').text(),
                //         model:'奕泽IZOA'
                //     },
                //     {
                //         name: 'flnm', phone: 'mob', sex: 'sex',
                //         cityId: 'reg', dealerId: 'desc',
                //         model:'tags'
                //     },
                //     '1958'
                // );
                $(".jsdpiPop").show();
                $(".jsdpiPop .pC").html("预约成功，感谢您的关注！");
                Empty();
            } else {
                userObj.checkBtn = false;
                $(".jsdpiPop").show();
                $(".jsdpiPop .pC").html('预约失败...原因:网络问题.');
            }
        });
    }
}
