    // 위쪽 네비게이션 바의 한국어 버튼 클릭할 시
    function LanguageClicked() {
        control_perform("language")
    }

    // 중간의 코드에 마우스 올릴 시
    function codeHover(obj) {
        var fir = $('#codes-first');
        var sec = $('#codes-second');
        var thi = $('#codes-third');
        var l = [fir, sec, thi];
        var o = obj.getAttribute('id');
        for(var i = 0; i < 3; i++) {
            if(o != l[i].attr('id')) {
                l[i].attr('class', 'codes-narrow');
            }
            else {
                l[i].attr("class", "codes-wide");
            }
        }
    }

    // 마우스 내릴 시
    function codeHoverOut(obj) {
        var fir = $('#codes-first');
        var sec = $('#codes-second');
        var thi = $('#codes-third');
        var l = [fir, sec, thi];
        for(var i = 0; i < 3; i++) {
            l[i].attr('class', 'codes-default');
        }
    }

    // 컨트롤 바 최소/최대화
    function control_bar() {
        var b = $('#control-window-button');
        if(b.val() == '최소화') {
            b.val('최대화');
            b.attr('class', 'control-window-closed');
        }
        else if(b.val() == '최대화') {
            b.val('최소화');
            b.attr('class', 'control-window-open');
        }
        $('.control').toggle(200);
    }

    // 컨트롤 바 로직
    var control_states = [
        "site-header : <span class='B'>visible</span>", 
        "language : <span class='R'>hidden</span>", 
        "main-picture : <span class='B'>visible</span>", 
        "launch : <span class='B'>visible</span>", 
        "explain-all : <span class='B'>visible</span>", 
        "start : <span class='B'>visible</span>", 
        "apps : <span class='B'>visible</span>", 
        "foot : <span class='B'>visible</span>"];
    var state = [
        "<span class='B'>visible</span>",
        "<span class='R'>hidden</span>"
    ];

    var log = "";

    function control_perform(target) {
        var t = target;
        var c;
        var change;
        for(var i = 0; i < control_states.length; i++) {
            if(control_states[i].indexOf(t) == 0) { // 찾고 있는 것일 때
                if(control_states[i].indexOf("visible") != -1) { // 출력중인 경우
                    c = t + " : " + state[1];
                    if(c == control_states[i]) continue; // 변화가 없는 경우
                    log += "<br>" +  t + " : " + state[0] + " -> " + state[1];
                }
                else {  // 출력하고 있는 상태가 아닌 경우
                    c = t + " : " + state[0];
                    if(c == control_states[i]) continue; // 변화가 없는 경우
                    log += "<br>" + t + " : " + state[1] + " -> " + state[0];
                } 

                control_states[i] = c;
                change = true;
                break;
            }
        }
        if(change) { 
            if(t == "language") $('#' + t).slideToggle(200);
            else $('.' + t).slideToggle(200);
        }
        update();
    }

    function update() {
        var texts = "";
        for(var i = 0; i < control_states.length; i++) {
            texts = texts + control_states[i] + "<br>";
        }
        $(".control-state").html(texts);
        $(".control-log").html(log);
    }

    function reset() {
        $('.control-log').html("");
        log = "";
    }