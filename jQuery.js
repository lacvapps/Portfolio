// jQuery

var HTMLmainPicture = '<li class="flex-item"><img src="%data%" class="mainPic"></li>';

$('#project-list li').click(
	function () {
		HTMLmainPicture.replace("%data%", $(this.attr('src')))
	});



$('#project-list li').hover(
  function () {
    $('#'+$(this).attr('id')+'content').fadeIn(200);
  },
  function () {
    $('#'+$(this).attr('id')+'content').fadeOut(200);
  }
);

