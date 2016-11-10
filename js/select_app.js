$(document).ready(function(){
	var dropBlock = null,
			selectRes = null,
			t = 0;


	$('.select-items').click(function(){
		dropBlock = $(this).find('.drop');
		if(dropBlock.is(':hidden')){
			dropBlock.slideDown();
			$(this).addClass('active');
		}else{
			dropBlock.slideUp();
			$(this).removeClass('active');
		}
		return false;
	});

	$('.drop').find('li').click(function(){
		selectRes = $(this).text();
		$(this).parent().parent().find('input').val(selectRes);
		$('.select-items').removeClass('active');
		$(this).parent().parent().find('.choosen').text(selectRes);
		dropBlock.slideUp();
		return false;
	});
});