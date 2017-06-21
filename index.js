setTimeout(function()
    {
        document.getElementById("load-div").style.display = "none";
        // document.getElementById("name").style.display = "inline";
        document.getElementById("developer").style.display = "inline";
        document.getElementById("monitor-div").style.display = "inline";
        document.getElementById("screen").style.display = "inline";
    },
    5000);

// document.getElementById("name").setAttribute("src","name.svg?dummy="+ new Date().getTime());
document.getElementById("load").setAttribute("src","load.svg?dummy="+ new Date().getTime());