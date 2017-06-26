var slideIndex = 1;

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}


window.onresize = function (event) {
    applyOrientation();
};

function setCalendar() {
    var calendar = document.getElementById("calendar");
    calendar.addEventListener("load", function () {
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
        document.getElementById("slider").style.display = "none";
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
                    document.getElementById("slider").style.display = "inline";
                    document.getElementById("window").style.display = "inline";
                    setCalendar();
                    setSlider(false);
                },
                5000);
            x = true;
        } else {
            document.getElementById("load-div").style.display = "none";
            document.getElementById("developer").style.display = "inline";
            document.getElementById("monitor-div").style.display = "inline";
            document.getElementById("calendar-div").style.display = "inline";
            document.getElementById("slider").style.display = "inline";
            document.getElementById("window").style.display = "inline";
            setSlider(true);
        }
    }
}

window.onload = function () {
    var x = false;
    applyOrientation(x);

    var otherDate= new Date();
    var birthDate= new Date("1995-10-05");
    var years = (otherDate.getFullYear() - birthDate.getFullYear());
    if (otherDate.getMonth() < birthDate.getMonth() ||
        otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate()) {
        years--;
    }
    document.getElementById("text-age").textContent = document.getElementById("text-age").textContent.replace("{age}", years);
};


function setSlider(x) {
    showDivs(slideIndex);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide-div");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}




