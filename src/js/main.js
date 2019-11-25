var t = 1;

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);

        storyTitle = myObj.stories[0].croatia[0].storyTitle;
        pageTitle = myObj.stories[0].croatia[0].pageTitle;
    }
};


$('.input-group-prepend').on('click', function() {
    $('.search-input').toggleClass('show');
    $('.search-input').focus();
});
$('.navbar-toggler').on('click', function() {
    $('.sidebar').toggleClass('hide_nav');
    $('.main-panel').toggleClass('hideed_nav');
});

if ($(window).width() < 992) {
    $('.sidebar').addClass('hide_nav'); 
    $('.main-panel').addClass('hideed_nav');
}


$(window).on("resize", function(event){
    if ($(this).width() < 992) {
        $('body').toggleClass('open_nav'); 
        $('.sidebar').addClass('hide_nav'); 
        $('.main-panel').addClass('hideed_nav');
    }
});