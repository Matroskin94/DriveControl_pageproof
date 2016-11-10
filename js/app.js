
/*accordion*/
$('.accordion-trigger, .close_btn').on('click', function(e) {
      e.preventDefault();
      var $this = $(this),
        item = $this.closest('.accordion-item'),
        list = $this.closest('.accordion-list'),
        items = list.find('.accordion-item'),
        content = item.find('.accordion-inner'),
        otherContent = list.find('.accordion-inner'),
        duration = 0;

      if (!item.hasClass('accordionActive')) {

        items.removeClass('accordionActive');
        item.addClass('accordionActive');

        otherContent.stop(true,true).slideUp(duration);
        content.stop(true,true).slideDown(duration);
      } else {
        content.stop(true,true).slideUp(duration);
        item.removeClass('accordionActive');
      }
    });

/*Pop-up window*/
function show_mess(e) {
    var wind = "#"+e.target.id.split('-')[0]+"-window";
    $(wind).css({"display": "block"});
    $("#modal-back").css({"display": "block"});
    $("#modal-back").animate({opacity:0.4},400);
    $(wind).animate({opacity:1},400);
};
function hide_mess(e) {
  var win_id = "#" + $(e.target).parent().parent().parent().prop("id") + "";
  console.log(e.target);
  if(win_id == "#undefined" && $("#pro-window").attr("style")[9] == "b"){
    win_id = "#pro-window";
  }else if(win_id == "#undefined" && $("#answ-window").attr("style")[9] == "b"){
    win_id = "#answ-window";
  }
  $("#modal-back").animate({opacity:0},400, function(){
      $("#modal-back").css({"display": "none"});
    });
    $(win_id).animate({opacity:0},400, function(){
      $(win_id).css({"display": "none"});
    });
};




$(document).ready(function(){
    var close_btn = document.getElementsByClassName("close_modal_btn"),
        pro_btn = document.getElementById("pro-btn"),
        overlay_btn = document.getElementById("modal-back");
        answ_btn = document.getElementById("answ-btn");
    for(var i=0;i<close_btn.length;i++){
      close_btn[i].onclick = hide_mess;
    }
   if(pro_btn!= null || answ_btn!= null){
     pro_btn.onclick = show_mess;
     answ_btn.onclick = show_mess;
     overlay_btn.onclick = hide_mess;
   }

});