$(function () {
    $('#my-countdown-timer').countdown('2020/5/4').on('update.countdown', function (event) {
        var $this = $(this).html(event.strftime('<div class="d-flex flex-wrap">'
            + '<span id="fs" class="flex-fill"><h4>%D</h4> Days</span>'
            + '<span id="fs" class="flex-fill"><h4>%H</h4> Hours</span>'
            + '<span id="fs" class="flex-fill"><h4>%M</h4> Minutes</span>'
            + '<span id="fs" class="flex-fill"><h4>%S</h4> Seconds</span></div>'));
    });
});