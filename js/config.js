var HONGQIMarketSk = HONGQIMarketSk || {};
HONGQIMarketSk.timerSKED = null;
HONGQIMarketSk.SKTimeSKED = null;
HONGQIMarketSk.NowTimeNew = null;
HONGQIMarketSk.SKTime = null;
HONGQIMarketSk.TimeWC = 0;
HONGQIMarketSk.timer = null;
HONGQIMarketSk.NowTimeNewSKED = null;
HONGQIMarketSk.cookiesDomain = "";

HONGQIMarketSk.SKTimeSKEDlist = new Array();
HONGQIMarketSk.NowTimeNewlist = new Array();
HONGQIMarketSk.SKTimelist = new Array();
HONGQIMarketSk.TimeWClist = new Array();
HONGQIMarketSk.timerlist = new Array();
HONGQIMarketSk.CloseImgCodeActids = "2017101299|2017101298|";//关闭图形验证码的专题
HONGQIMarketSk.isCloseShuang11Activitiecode = false; //是否关闭双11活动验证码，true关闭，false正常使用 不关闭 
HONGQIMarketSk.ClosePhoneCoceActids = "2017110714|201905138|"; //关闭短信验证码的专题
HONGQIMarketSk.LogYichePhone = "";//登陆环境下的手机号
HONGQIMarketSk.msg = [
    "请填写手机号", //0
    "请填写正确的手机号，如:13012345678", //1
    "过3分钟再进行此操作", //2
    "验证码以短信形式发送到您的手机，请查收。", //3
    "该手机号已经注册了本专题", //4
    "过3分钟再进行此操作", //5
    "网络异常，请稍后重试", //6
    "请输入在本专题报名时所填写的密码", //7
    "信息输入错误",//8
    "登录成功", //9
    "您还没有在本专题提交报名信息", //10
    "提交成功，请注意查收短信", //11
    "您好，活动还未开始，请关注活动时间。", //12
    "出价成功",//13
    "您已经没有机会参加竞拍!", //14
    "请输入竞猜价格", //15
    "请输入合理的价格", //16
    "竞拍价格只能为整数",//17
    "出价成功",//18
    "请关注活动时间", //19
    "您输入的价格小于起拍价格", //20
    "您输入的价格大于指导价格", //21
    "您已经没有机会参加竞拍", //22
    "该价格，您已经出过", //23
    "本期活动已经结束", //24
    "请先报名或登录后再参与此活动", //25
    "您已经参加了本轮秒杀活动",//26
    "恭喜您，您的秒杀成绩已提交！", //27
    "请输入在本专题报名时所填写的手机", //28
    "验证码将以短信形式发送到您的手机，请耐心等待",//29
    "当前参与秒杀的用户过于拥挤，请稍后重试~" //30

];

