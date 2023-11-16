var modal = (function () {
    var $window = $(window);
    var $modal = $('<div class="modal"></div>');
    var $content = $('<div class="modal-content"></div>');
    var $close = $('<button role="button" class="modal-close">close</button>');

    $modal.append($content, $close);

    $close.on('click', function (e) {
        e.preventDefault();
        modal.close();
    });

    return {
        center: function () {
            var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        },
        open: function (settings) {
            // Get the source and alt attributes of the current active thumbnail
            var src = $('.thumb.active img').attr('src');
            var alt = $('.thumb.active img').attr('alt');

            // Create a new image element with the source and alt attributes
            var $image = $('<img src="' + src + '" alt="' + alt + '">');

            $content.empty().append($image);
            $modal.css({
                width: settings.width || '800px',
                height: settings.height || '450px'
            }).appendTo('body');

            modal.center();
            $(window).on('resize scroll', modal.center);
        },
        close: function () {
            $content.empty();
            $modal.detach();
            $window.off('resize', modal.center);
        }
    };
}());
