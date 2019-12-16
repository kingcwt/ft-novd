;(function($){
  $.fn.xy = function(data, paramsMap, config){
    // 检测数据合法性
    if(!!!data){
      if(isDev){console.log('[xy]请传入需要上传的数据')}
      return
    }
    var hn = location.hostname
    var sex_enums = {0: 's', 1: 'm', 2: 'f'}
    var isDev = (hn === "127.0.0.1")||(hn === "localhost")
    var devPath = '//localhost:8978/landings/push/rongfang/entry/'+config
    var proPath = '//landingpage.xiaoyun.com/landings/push/rongfang/entry/'+config
    

    function formatSex(item){
      return item&&sex_enums[item] ? sex_enums[item]: sex_enums[0]
    }
    var par = {}
    $.each(data, function(key,item){
      if(!(paramsMap&&paramsMap[key])){
        if(isDev){console.log('[xy]字段'+key+'未传入映射')}
        return false
      }
      var parkey = paramsMap[key]
      // console.log(parkey)
      switch (parkey){
        case 'tags':
          if(par&&par[parkey]){
            var arr = par[parkey]
            arr.push(item)
            par[parkey] = arr
          }else{
            par[parkey] = [item]
          }
          break;
        case 'sex':
          par[parkey] = formatSex(item)
          break;
        default:
          if(par&&par[parkey]){
            par[parkey] = par[parkey]+item
          }else{
            par[parkey] = item
          }

      }
 

    })
    $.ajax({
      url: isDev? devPath: proPath,
      type: 'post',
      data: par,
      success: function(res){
        if(res&&res.success){
          if(isDev){console.log('[xy]提交成功')}
        }
      }
    })
  }
})(jQuery)