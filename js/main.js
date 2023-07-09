$(function(){
  $("#open").show();
  $("#close").hide();
// アイコンをクリック
$("#open").click(function(){
// ulメニューを開閉する
$("#navi").slideToggle();
  $("#open").hide();
  $("#close").show();
});

// アイコンをクリック
$("#close").click(function(){
// ulメニューを開閉する
$("#navi").slideToggle();
  $("#open").show();
  $("#close").hide();
});

});

$(function() {
  // 変数にクラスを入れる
  var btn = $('.page-top');

  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 100) {
      btn.addClass('page-top-active');
    }else{
      btn.removeClass('page-top-active');
    }
  });

  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});
