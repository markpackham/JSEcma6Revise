(function ($) {
    $.fn.alert = function () {
        return this.each(function () {
            var self = $(this);
            //target close class links on our alerts
            self.on('click', '.close', function () {
                //use the close class in css
                self.addClass('close');
            });
            /*After the vanishing animation remove */
            self.on('transitionend', function () {
                self.remove();
            });
        });
    };
}(jQuery))