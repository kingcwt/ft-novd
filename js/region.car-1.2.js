/**
 * Created by Hai on 17/4/12.
 */
var HOST = 'https://a.mtty.com';
var get_province_url = HOST+'/openapi/common/webtool/getFTProvince' ;
var get_city_url = HOST+'/openapi/common/webtool/getFTCity' ;
var get_dealer_url = HOST+'/openapi/common/webtool/getFTDealer' ;

$.ajax({
    type:"get",
    url:get_province_url ,
    data:{'cid':0},
    xhrFields: {
        withCredentials: true
    },
    crossDomian: true,
    success:function (msg) {
        var provHtmlStr = '' ;
        for(var i=0;i<msg.length;i++){
           provHtmlStr = provHtmlStr + '<option value="'+msg[i]['cid']+'" rel="'+msg[i]["name"]+'">'+msg[i]["name"]+'</option>' ;
        }
        $("#ftms_province").append(provHtmlStr) ;
    }
}) ;

//获取市
$("#ftms_province").change(function () {
    var cid = $(this).val() ;
    $("#ftms_dealer").html('<option value="0">请选择经销商</option>');
    if( cid != '0' ){
        $.ajax({
            type:"post",
            url:get_city_url ,
            data:{'cid':cid},
            xhrFields: {
                withCredentials: true
            },
            crossDomian: true,
            success:function (msg) {
                $("#ftms_city").html('') ;
                var cityHtmlStr = '' ;
                for(var i=0;i<msg.length;i++){
                    cityHtmlStr = cityHtmlStr + '<option value="'+msg[i]['cid']+'" rel="'+msg[i]['name']+'">'+msg[i]['name']+'</option>' ;
                }
                $("#ftms_city").append(cityHtmlStr) ;
            }
        }) ;
    }else{
        $("#ftms_city").empty().html('<option value="0">请选择城市</option>') ;
    }

});

//获取经销商
$("#ftms_city").change(function () {
    var city = $(this).find("option:selected").attr('rel') ;
    var province = $("#ftms_province").find("option:selected").attr('rel') ;

    if( city != '' || province !='' ){
        $("#ftms_dealer").html('<option value="0">请选择经销商</option>')
        $.ajax({
            type:"post",
            url:get_dealer_url ,
            data:{'cityName':city,'provinceName':province},
            xhrFields: {
                withCredentials: true
            },
            crossDomian: true,
            success:function (msg) {
                var data = msg['data'] ;
                var dealHtmlStr = '' ;
                for(var i=0;i<data.length;i++){
                    dealHtmlStr = dealHtmlStr + '<option value="'+data[i]['code']+'">'+data[i]['name']+'</option>' ;
                }
                $("#ftms_dealer").append(dealHtmlStr) ;
            }
        }) ;
    }
});






