
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgIHNjcm9sbEV2ZW50ID0gZmFsc2U7IC8vIO2VnOuyiOyUqeunjCDsoIHsmqnsi5ztgqTquLDsnITtlbQg7LC46rGw7KeTIOqwkuydhCDso7zripQg67OA7IiY7ISg7Ja4XHJcbnZhciBjb3VudCA9IDA7IC8vIOyWvOuniOunjO2BvOuCtOuguOuKlOyngCDshLjquLDsnITtlahcclxuXHJcbiQoXCJodG1sLGJvZHlcIikub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbihjKXtcclxuICAgIGMucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIOu4jOudvOyasOyggOq4sOuKpeywqOuLqC4g7Iqk7YGs66a97Yq47JmAIOu4jOudvOyasOyggCDqsITsnZgg7ZqU6riw64qlIOqwhOyEreydhCDrp4nslYTspIxcclxuICAgIHZhciBtID0gYy5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE7XHJcbiAgICAvLyB3aGVlbCDsl5DshJwg7Ja77J2EIOyImCDsnojripQg7KCV67O0IOykkSB3aGVsbERlbHRhIOqwkuunjCDrs4DsiJggbeyXkCDri7TsnYxcclxuICAgIHZhciBzYiA9ICQoXCIubWFpbjFcIikuaGVpZ2h0KCk7XHJcblxyXG4gICAgaWYobSA+IDEgJiYgc2Nyb2xsRXZlbnQgPT0gZmFsc2UgJiYgY291bnQgPj0gMSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgICAgICBzY3JvbGxFdmVudCA9IHRydWU7XHJcbiAgICAgICAgY291bnQtLTtcclxuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AoKS5hbmltYXRlKHtzY3JvbGxUb3A6IHNiICogY291bnR9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEV2ZW50ID0gZmFsc2U7fVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAobSA8IDEgJiYgc2Nyb2xsRXZlbnQgPT0gZmFsc2UgJiYgY291bnQgPCAzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY291bnQpO1xyXG4gICAgICAgIHNjcm9sbEV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICQoXCJodG1sLGJvZHlcIikuc3RvcCgpLmFuaW1hdGUoe3Njcm9sbFRvcDogc2IgKiBjb3VudH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcblxyXG4vLyDthY3siqTtirgg7Zqo6rO8IC8vXHJcblxyXG52YXIgVHh0VHlwZSA9IGZ1bmN0aW9uKGVsLCB0b1JvdGF0ZSwgcGVyaW9kKSB7XHJcbiAgICB0aGlzLnRvUm90YXRlID0gdG9Sb3RhdGU7XHJcbiAgICB0aGlzLmVsID0gZWw7XHJcbiAgICB0aGlzLmxvb3BOdW0gPSAwO1xyXG4gICAgdGhpcy5wZXJpb2QgPSBwYXJzZUludChwZXJpb2QsIDEwKSB8fCAyMDAwO1xyXG4gICAgdGhpcy50eHQgPSAnJztcclxuICAgIHRoaXMudGljaygpO1xyXG4gICAgdGhpcy5pc0RlbGV0aW5nID0gZmFsc2U7XHJcbn07XHJcblxyXG5UeHRUeXBlLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgaSA9IHRoaXMubG9vcE51bSAlIHRoaXMudG9Sb3RhdGUubGVuZ3RoO1xyXG4gICAgdmFyIGZ1bGxUeHQgPSB0aGlzLnRvUm90YXRlW2ldO1xyXG5cclxuICAgIGlmICh0aGlzLmlzRGVsZXRpbmcpIHtcclxuICAgICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCAtIDEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnR4dCA9IGZ1bGxUeHQuc3Vic3RyaW5nKDAsIHRoaXMudHh0Lmxlbmd0aCArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwid3JhcFwiPicrdGhpcy50eHQrJzwvc3Bhbj4nO1xyXG5cclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHZhciBkZWx0YSA9IDIwMCAtIE1hdGgucmFuZG9tKCkgKiAxMDA7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNEZWxldGluZykgeyBkZWx0YSAvPSAyOyB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzRGVsZXRpbmcgJiYgdGhpcy50eHQgPT09IGZ1bGxUeHQpIHtcclxuICAgICAgICBkZWx0YSA9IHRoaXMucGVyaW9kO1xyXG4gICAgICAgIHRoaXMuaXNEZWxldGluZyA9IHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNEZWxldGluZyAmJiB0aGlzLnR4dCA9PT0gJycpIHtcclxuICAgICAgICB0aGlzLmlzRGVsZXRpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvb3BOdW0rKztcclxuICAgICAgICBkZWx0YSA9IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoYXQudGljaygpO1xyXG4gICAgfSwgZGVsdGEpO1xyXG59O1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm94LXRleHQnKTtcclxuICAgIGZvciAodmFyIGk9MDsgaTxlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciB0b1JvdGF0ZSA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XHJcbiAgICAgICAgdmFyIHBlcmlvZCA9IGVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJpb2QnKTtcclxuICAgICAgICBpZiAodG9Sb3RhdGUpIHtcclxuICAgICAgICAgICAgbmV3IFR4dFR5cGUoZWxlbWVudHNbaV0sIEpTT04ucGFyc2UodG9Sb3RhdGUpLCBwZXJpb2QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIElOSkVDVCBDU1NcclxuICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgICBjc3MudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuICAgIGNzcy5pbm5lckhUTUwgPSBcIi5ib3gtdGV4dCA+IC53cmFwIHsgYm9yZGVyLXJpZ2h0OiAwLjA4ZW0gc29saWQgI2ZmZn1cIjtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcclxufTsiXX0=
