$(document).ready(function() {
    /*btn_bars*/
    $('.btn_bars').on("click",function(){
        $('.sidebar').toggleClass("_hide");
        $('.container').toggleClass("_hide");
        $('.header').toggleClass("_hide");
    })//

    /*sidebar*/
    $(".sidebar>ul>li>a").on("click",function(){
        if($(this).parent().hasClass('on')){
            $(this).parent().removeClass("on");  
            $(this).siblings('.depth').slideUp();
            $(this).find('i.arrow').removeClass('fa-angle-up').addClass("fa-angle-down")
        }else{
            $(this).parent().addClass("on")
            $(this).siblings('.depth').slideDown();
            $(this).find('i.arrow').removeClass('fa-angle-down').addClass("fa-angle-up")

        }
    })//
    /*nav*/
	$('.ico_nav').on("click",function(){
        $(this).toggleClass('open');
        $('.sidebar').toggleClass('open')
    });
    




    $("[data-toggle]").click(function() {
        var toggle_el = $(this).data("toggle");
        $(toggle_el).toggleClass("clse_sidebar");
    })//;





    $("#sidebar-toggle").on('click',function(){
        $('#sidebar').toggleClass('clse')
    })
    
    var sidebarState = sessionStorage.getItem('sidebarState');
    
    windowWidth = $(window).width();
    
    $(window).resize(function() {
      windowWidth = $(window).width();
    
      if( windowWidth < 992 ){ //992 is the value of $screen-md-min in boostrap variables.scss
            $('#main-section').removeClass('sidebar-expanded').addClass('sidebar-collapsed');
            $('#toggle-collapse').removeClass('glyphicon-circle-arrow-left').addClass('glyphicon-circle-arrow-right');
        }
        else{
            if(sidebarState){
                $('#main-section').addClass('sidebar-collapsed').removeClass('sidebar-expanded'); 
                $('#toggle-collapse').removeClass('glyphicon-circle-arrow-left').addClass('glyphicon-circle-arrow-right');
            }
            else{
                $('#main-section').addClass('sidebar-expanded').removeClass('sidebar-collapsed'); 
                $('#toggle-collapse').removeClass('glyphicon-circle-arrow-right').addClass('glyphicon-circle-arrow-left');
            }
        }
    });
    function setSidebarState(value){
        sessionStorage.setItem('sidebarState', value);
    }
    
    function clearSidebarState(){
        sessionStorage.removeItem('sidebarState');
    }
    
    function collapseSidebar(){
        $('#main-section').addClass('sidebar-collapsed').removeClass('sidebar-expanded');
        $('#toggle-collapse').removeClass('glyphicon-circle-arrow-left').addClass('glyphicon-circle-arrow-right');
    }
    
    function expandSidebar(){
        $('#main-section').addClass('sidebar-expanded').removeClass('sidebar-collapsed');
        $('#toggle-collapse').removeClass('glyphicon-circle-arrow-right').addClass('glyphicon-circle-arrow-left');
    }
    
    $(function(){
    
        console.log(windowWidth);
    
        /** check sessionStorage to expand/collapse sidebar onload **/
    
    
        if (sidebarState == "collapsed"){
            collapseSidebar();
        }
        else{
    
    
    
            if( windowWidth < 992 ){ //992 is the value of $screen-md-min in boostrap variables.scss
                $('#main-section').removeClass('sidebar-expanded').addClass('sidebar-collapsed');
                $('#toggle-collapse').removeClass('glyphicon-circle-arrow-left').addClass('glyphicon-circle-arrow-right');
            }
            else{
                if(sidebarState){
                $('#main-section').addClass('sidebar-collapsed').removeClass('sidebar-expanded'); 
                $('#toggle-collapse').removeClass('glyphicon-circle-arrow-left').addClass('glyphicon-circle-arrow-right');
            }
            else{
                $('#main-section').addClass('sidebar-expanded').removeClass('sidebar-collapsed'); 
                $('#toggle-collapse').removeClass('glyphicon-circle-arrow-right').addClass('glyphicon-circle-arrow-left');
            }
            }
            
        }
    
        
    
    
        /** collapse the sidebar navigation **/    
        $('#collapse-nav').click(function(){
            if ( !($('#main-section').hasClass('sidebar-collapsed')) ) { // if sidebar is not yet collapsed
                collapseSidebar();
                setSidebarState('collapsed');
            }
            else{
                expandSidebar();
                clearSidebarState();
            }
            return false;
        })
    })





	/*if (Cookies.get('menu-state') === 'open') {
		$("#sidebar").removeClass("clse")
		$(".container").removeClass("clse_sidebar")
    } else {
        
    };*/

	/*header userinfo*/
	$(".user_info>li>a").on("click",function(e){
        e.preventDefault();
        $('.ac_dept').slideToggle();
    })//

	/*mobile sidebar*/
	var filter = "win16|win32|win64|mac";

	if(navigator.platform){

		if(0 > filter.indexOf(navigator.platform.toLowerCase())){

		$("#sidebar").addClass("clse")
		$(".container").addClass("clse_sidebar")
		

	}else{
		
	}

	}//if navigator
	
	
	

});//jq




