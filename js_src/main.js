
var  scrollEvent = false; // 한번씩만 적용시키기위해 참거짓 값을 주는 변수선언
var count = 0; // 얼마만큼내렸는지 세기위함

$("html,body").on('mousewheel', function(c){
    c.preventDefault();
    // 브라우저기능차단. 스크립트와 브라우저 간의 횔기능 간섭을 막아줌
    var m = c.originalEvent.wheelDelta;
    // wheel 에서 얻을 수 있는 정보 중 whellDelta 값만 변수 m에 담음
    var sb = $(".main1").height();

    if(m > 1 && scrollEvent == false && count >= 1) {
        console.log(count);
        scrollEvent = true;
        count--;
        $("html,body").stop().animate({scrollTop: sb * count},
            {
                duration: 300, complete: function () {
                    scrollEvent = false;}
            });
    } else if (m < 1 && scrollEvent == false && count < 3) {
        console.log(count);
        scrollEvent = true;
        count++;
        $("html,body").stop().animate({scrollTop: sb * count},
            {
                duration: 300, complete: function () {
                    scrollEvent = false;
                }
            });
    }

});


// 텍스트 효과 //

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('box-text');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".box-text > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};