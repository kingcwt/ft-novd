$(document).ready(function () {
	
	$(".menu li").on('touchend',function(){
		$(this).siblings().removeClass("on");
		$(this).addClass("on");
		var preNumber=$(this).prevAll().size()+1;
		$(".cont li").removeClass("on");
		$(".cont li:nth-child("+preNumber+")").addClass("on");
	});
	
	$("input[name='form-input']").bind({
		focus: function () {
			if (this.value == this.defaultValue) {
				this.value = "";
			}
		},
		blur: function () {
			if (this.value == "") {
				this.value = this.defaultValue;
			}
		}
	});
	
	    //标签切换
	function picTab(tabli,tabon,piccon){
		$(tabli).click(function() {
			if (!$(this).hasClass(tabon)) {
				var index = $(tabli).index($(this));
				$(tabli).removeClass(tabon);
				$(this).addClass(tabon);
				$(piccon).removeClass(tabon);
				$($(piccon).get(index)).addClass(tabon);
			    
			}
		});		
	}
	picTab(".part3 .tabbox li","on",".part3 .showbox");

	
	//弹出内容框
	var mask = $('.mask-layer');
	function popupHidden(){
		mask.removeClass('active');
		$('.popup-in').css({display:'none'}).removeClass('popup-in')
	}
	$('.popup-btn').on('touchend',function(){
		var thisPop = $('.'+$(this).data('popup'));
		thisPop.css({display:'block'})
		var timer;
		timer = setTimeout(function(){
            mask.addClass('active')
			thisPop.addClass('popup-in')
		},100)
	});
	mask.on('touchend mousedown',function (e) {
		e.preventDefault()
		popupHidden();
	});
	$('.jsClose').on('touchend mousedown',function (e) {
		e.preventDefault()
		popupHidden();
	});
	
	//弹出提示框
	$(".tips-btn").on('touchend mousedown',function() {
		$(".tips-panel").css({display:'block'}).animate({opacity:1});
		var timer = setTimeout(function(){
			$(".tips-panel").animate({opacity:0},function(){$(this).css("display","none")});
		},2000)
	});
	
	//水波反馈效果
	$('.btn').on('click', function (e) {
		$(".ripple").remove();
		var offset = $(this).offset();
		var x = e.pageX;
		var y = e.pageY;
		var owidth = $(this).width();
		var oheight = $(this).height();
		$(this).append("<span class='ripple'></span>")
		// Let's make a circle!
		if (owidth >= oheight) {
			oheight = owidth;
		} else {
			owidth = oheight;
		}
		$(".ripple").css({
			width:owidth,
			height:oheight,
			left: x - offset.left - owidth / 2,
			top: y - offset.top - oheight / 2
		}).addClass('show')
	});


	// 游戏
    $("#button").click(function() {
        // $('#startdiv').hide();
        // gameDaoJiShi();

        var recId = GetCookie('recid_2018' + userObj.ActivitiesID);
        if (recId != "" && recId != undefined && recId != null) {
            $('#startdiv').hide();
            gameDaoJiShi();
        } else {
            alert('请先报名再来抽奖吧！');
        }
    });

    (function($) {
        $.fn.shuffle = function() {
            return this.each(function() {
                var items = $(this).children();
                return (items.length) ?
                    $(this).html($.shuffle(items)) :
                    this;
            });
        };
        $.shuffle = function(arr) {
            for (
                var j, x, i = arr.length; i; j = parseInt(Math.random() * i),
                x = arr[--i], arr[i] = arr[j], arr[j] = x
            );
            return arr;
        };
    })(jQuery);


    var fanpaicurrentnum = 0;

    function mainGame() {
        var currentOpened = false;

        //	duplicate cards
        var clones = $('#memory div.card').clone();
        $('#memory').append(clones);

        //	shuffle cards
        $('#memory').shuffle();

        //	create carousels
        $('#memory div.card').carouFredSel({
            circular: false,
            infinite: false,
            items: 1,
            auto: false,
            scroll: {
                fx: 'fade',
                duration: 250
            },
            next: {
                button: function() {
                    return $(this).parent();
                },
                onAfter: function(data) {
                    //	second card, check for match
                    if (currentOpened) {

                        //	no match, close both
                        if (currentOpened.children().eq(0).attr('src') != data.items.visible.attr('src')) {
                            currentOpened.add(this).delay(500).trigger('prev');

                        } else {
                            fanpaicurrentnum += 1;

                            if (fanpaicurrentnum == 3) {
                                clearInterval(gamesetIntervalid);
                                // alert('恭喜您完成游戏');
                                // var recid = GetCookie("recid2015" + ActivitiesID);
                                ChouJiang();
                            }
                            // else if(fanpaicurrentnum == 2){
                            // 	alert('恭喜');
                            // }
                        }

                        currentOpened = false;
                        //	first card
                    } else {
                        if (gamesetIntervalid == null) {
                            gameDaoJiShi();
                        }
                        currentOpened = $(this);
                    }
                }
            }
        });
    }


    var gamesetIntervalid = null;

    function gameDaoJiShi() {
        var num = 15;
        gamesetIntervalid = setInterval(function() {
            num -= 1;
            if (num <= 0) {
                $('#gametime').html("0");
                clearInterval(gamesetIntervalid);
                if (confirm(num + "秒时间已到，您要重新玩一局么？")) {
                    window.location = location.href;
                }
            } else {
                $('#gametime').html(num);
            }
        }, 1000);
    }

    // mainGame();
    // Empty();	
	
});