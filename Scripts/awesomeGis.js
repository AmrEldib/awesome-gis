/// <reference path="jquery-2.1.1.js" />
/// <reference path="bootstrap.js" />
/// <reference path="handlebars.runtime.js" />
/// <reference path="../templates/navTemplate.hbs.js" />
/// <reference path="../templates/samplesTemplate.hbs.js" />

try {
    $.get('data.json', function (samplesData) {
        $('#samplesContainer').html(samplesTemplate(samplesData));

        $(function () {
            $('#txtFilter').fastLiveFilter('.samplesList', {
                timeout: 200,
                callback: function (total) {
                    console.log("Found: " + total);
                }
            });
        });
        $('#navContainer').html(navTemplate(samplesData));

        $(window).scroll(function () {
            if ($(document).scrollTop() > 50) {
                $('#banner').addClass('shrink');
            } else {
                $('#banner').removeClass('shrink');
            }
        });
    });
} catch (e) {
    console.log(e);
}