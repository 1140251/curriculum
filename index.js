function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}


window.onresize = function (event) {
    applyOrientation();
};

function setCalendar() {
    var calendar = document.getElementById("calendar");
    calendar.addEventListener("load",function() {
        calendar.contentDocument.getElementById("day").textContent = new Date().getUTCDate().toString();
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        calendar.contentDocument.getElementById("month").textContent = monthNames[new Date().getMonth()];
    }, false);
}


function applyOrientation(x) {
    if (window.innerHeight > window.innerWidth) {
        if (isMobileDevice()) {
            document.getElementById("end-mobile").style.display = "inline";
        } else {
            document.getElementById("end-computer").style.display = "inline";
        }
        document.getElementById("load-div").style.display = "none";
        document.getElementById("calendar-div").style.display = "none";
        document.getElementById("developer").style.display = "none";
        document.getElementById("monitor-div").style.display = "none";
        document.getElementById("screen").style.display = "none";
        document.getElementById("screen2").style.display = "none";
        document.getElementById("screen3").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("window").style.display = "none";
        x = true;
    } else {
        document.getElementById("load").setAttribute("src", "load.svg?dummy=" + new Date().getTime());

        if (x == false) {
            setTimeout(function () {
                    document.getElementById("load-div").style.display = "none";
                    document.getElementById("developer").style.display = "inline";
                    document.getElementById("monitor-div").style.display = "inline";
                    document.getElementById("calendar-div").style.display = "inline";
                    document.getElementById("screen").style.display = "inline";
                    document.getElementById("screen2").style.display = "inline";
                    document.getElementById("screen3").style.display = "inline";
                    document.getElementById("screen4").style.display = "inline";
                    document.getElementById("window").style.display = "inline";
                    setCalendar();
                },
                5000);
            x = true;
        } else {
            document.getElementById("load-div").style.display = "none";
            document.getElementById("developer").style.display = "inline";
            document.getElementById("monitor-div").style.display = "inline";
            document.getElementById("calendar-div").style.display = "inline";
            document.getElementById("screen").style.display = "inline";
            document.getElementById("screen2").style.display = "inline";
            document.getElementById("screen3").style.display = "inline";
            document.getElementById("screen4").style.display = "inline";
            document.getElementById("window").style.display = "inline";
        }
    }
}



window.onload = function() {
    var x = false;
    applyOrientation(x);
};