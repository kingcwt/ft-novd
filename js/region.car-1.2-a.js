/**
 * Created by Hai on 17/4/12.
 */
var HOST = 'https://api.ftms.com.cn/';
var get_province_url = HOST+'/Openapi/SetClues/getCity1' ;
var get_city_url = HOST+'/Openapi/SetClues/getRegionCity' ;
var get_dealer_url = HOST+'/Openapi/SetClues/getDealer' ;
var get_car_url = HOST+'/Openapi/SetClues/getCar';
var get_models_url = HOST+'/Openapi/SetClues/getModels' ;
var get_buying_time_url = HOST+'/Openapi/SetClues/buyingTime' ;
//id选择器定义 省：province  城市：city  经销商：dealer 车系 car 车型 models  购车时间 buying_time

/**
 *
 * mediaLeadId ： 可以是自己数据的主键ID
 mediaLeadType ： 默认预约试驾
 channelKeyId ： 不需要传

 * "datas": [{
"mediaLeadId":101, //媒体ID
"mediaLeadType": "常规投放数据收集", //媒体线索类型
"channelKeyId":0, //渠道ID
"name": "张国强", //客户姓名
"phone": "18801301638", //客户电话
"sex": 1, //客户性别
"provinceId": 110000, //客户所在省
"cityId": 110000, //客户所在市
"dealerId":10111, //经销商ID
"seriesId": 9,         //车系 ID
"levelId": 1, //级别 ID
"orderTime": "2017-01-20 18:11:30", //下单时间
"activity":327, //活动ID
}]
 */
//加载获取省
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

//获取车系
$.ajax({
    type:'get',
    url:get_car_url ,
    xhrFields: {
        withCredentials: true
    },
    crossDomian: true,
    success:function (msg) {
       var carHtmlStr = '<option>意向车型</option>' ;
       for (var i=0;i<msg.length;i++){
           carHtmlStr = carHtmlStr + '<option value="'+msg[i]['cid']+'">'+msg[i]['name']+'</option>' ;
       }
       $("#ftms_car").append(carHtmlStr) ;
    }
}) ;

//获取车型
$("#ftms_car").change(function () {
    var cid = $(this).val() ;
    if( cid != '' ){
        $.ajax({
            type:'post',
            data:{'cid':cid},
            url:get_models_url,
            xhrFields: {
                withCredentials: true
            },
            crossDomian: true,
            success:function (msg) {
                $("#ftms_models").html('<option>请选择车型</option>') ;
                var ModelsHtmlStr = '' ;
                for (var i=0;i<msg.length;i++){
                    ModelsHtmlStr = ModelsHtmlStr + '<option value="'+msg[i]['cid']+'">'+msg[i]['name']+msg[i]['version']+'</option>' ;
                }
                $("#ftms_models").append(ModelsHtmlStr) ;
            }
        }) ;
    }
});







