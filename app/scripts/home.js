be2e.home = function(){

  var init = function(){

    var msnry = new masonry( '.grid', {
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      percentPosition: true
    });

  }

  return {
    init: init
  };

}();

$(function(){
  be2e.home.init();
});
