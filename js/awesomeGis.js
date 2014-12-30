/// <reference path="../node_modules/jquery/dist/jquery.js" />
/// <reference path="../node_modules/bootstrap/dist/js/bootstrap.js" />
/// <reference path="../node_modules/handlebars/dist/handlebars.runtime.js" />
/// <reference path="../templates/navTemplate.hbs.js" />
/// <reference path="../templates/samplesTemplate.hbs.js" />

try {
    $.get('data.json', function (awesomeData) {
        $('#itemsContainer').html(itemTemplate(awesomeData));

        $(function () {
            $('#txtFilter').fastLiveFilter('.itemList', {
                timeout: 200
                //callback: function (total) {
                //    console.log("Found: " + total);
                //}
            });
        });
        $('#navContainer').html(navTemplate(awesomeData));

        $(window).scroll(function () {
            if ($(document).scrollTop() > 50) {
                console.log("Scroll past 50");
                $('#banner').addClass('shrink');
                //$('#pageContent').addClass('shrink');
                //$('#navBar').addClass('shrink');
                //$('#itemsContainer').addClass('shrink');
            } else {
                $('#banner').removeClass('shrink');
                //$('#pageContent').removeClass('shrink');
                //$('#navBar').removeClass('shrink');
                //$('#itemsContainer').removeClass('shrink');
            }
        });

        //$(".jquery-anchor").on('click', function (e) {

        //    // prevent default anchor click behavior
        //    e.preventDefault();

        //    if ($(".jquery-anchor").length > 0 && document.URL.indexOf("#") >= 0) {
        //        var anchor = document.URL.split("#")[1];
        //        $(".jquery-anchor").each(function () {
        //            if ($(this).attr("name") == anchor) {
        //                $("html,body").animate({
        //                    scrollTop: $(this).offset().top - 50
        //                },
        //                    'slow');
        //            }
        //        });
        //    }
         
        //    //// animate
        //    //$('html').animate({
        //    //    scrollTop: $(this.hash).offset().top - 120
        //    //}, 300, function () {
        //    //    console.log(this);
        //    //    console.log(this.hash);
        //    //    // when done, add hash to url
        //    //    // (default click behaviour)
        //    //    window.location.hash = this.hash;
        //    //});

        //});
    });
} catch (e) {
    console.log(e);
}