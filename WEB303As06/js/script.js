$(document).ready(function() {
    $('.accordion h3').click(function() {
        $(this).next('.panel').slideToggle();
        $('.accordion .panel').not($(this).next('.panel')).slideUp();
    });

    $('.tabs .tab-nav li a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $(target).toggle();
        $('.tab-content').not(target).hide();
    });
});
