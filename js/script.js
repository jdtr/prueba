//Var
var win, doc, header, h_header, navigation, btnMobile;

//Functions
function bg(elm){
	var i;
	for (i = elm.length - 1; i >= 0; i--) {
		var elmBg = elm[i].getAttribute("data-img");
		elm[i].style.backgroundImage = "url("+ elmBg +")";
	}
}
function removeMenu(){
    header.removeClass("active");
    $("#nav-mobile").removeClass("active");
    navigation.removeClass("active");
}

$(document).on("ready", function(){
	win = $(window);
	doc = $("html,body");
	navigation = $(".navigation");
	header = $("#header");
	h_header = header.innerHeight();
    btnMobile = $("#nav-mobile");
    var bgImg = $("[data-img]");

	//Nav mobile
	btnMobile.on("click", function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		navigation.toggleClass("active");
	});

    //Scroll
    win.on("scroll", function(){
        if($(this).scrollTop() > h_header){
            header.addClass("active");
            header.next().css("margin-top", h_header);
        }else{
            header.removeClass("active");
            header.next().css("margin-top", 0);
        }
    });

	//Bg
	bg(bgImg);

    //Carousel
    $(".cont-slider").owlCarousel({
        items:1
    });

	//Map
    $(function () {
        var center = [6.223282, -75.575023];
        $('#map')
          .gmap3({
            center:center,
            zoom: 18,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
          })
          .marker(function (map) {
            return {
              position: center
            };
        });
    });
});

window.onload = function(){
    $(".radius-banner").delay(300).addClass("animated fadeInDown");
    $(".title-banner").delay(300).addClass("animated fadeIn");

    //Wow
    new WOW().init();

    //Loading
    $(".loading svg").animate({ opacity:0 }, 300);
    $(".loading").delay(300).animate({ opacity:0 }, 300, function(){
        $(this).hide();
    });
}