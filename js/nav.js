function removeMenu(){
    header.removeClass("active");
    $("#nav-mobile").removeClass("active");
    navigation.removeClass("active");
}
$(document).on("ready", function(){
	//Menu
    var aChildren = $(".menu a[href*='#']");
    var aArray = [];

    $("a[href^='#']").on("click", function(e){
        e.preventDefault();
        if(win.width() > 991){
        	doc.animate({ scrollTop: $(this.hash).offset().top - 50}, 500);
        }else{
        	doc.animate({ scrollTop: $(this.hash).offset().top }, 500);
        }
        btnMobile.removeClass("active");
        removeMenu();
    });

    for(var i=0; i < aChildren.length; i++){
        var aChild = aChildren[i];
        var ahref = $(aChild).attr("href");
        aArray.push(ahref);
    }
    win.on("scroll", function(){
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();

        for(var i=0; i < aArray.length; i++){
            var theID = aArray[i];
            var divPos = $(theID).offset().top - 50;
            var divHeight = $(theID).innerHeight();
            
            if(windowPos >= divPos && windowPos < (divPos + divHeight)){
                $("a[href='"+ theID +"']").addClass("active");
            }else {
                $("a[href='" + theID + "']").removeClass("active");
            }
        }
	});

});