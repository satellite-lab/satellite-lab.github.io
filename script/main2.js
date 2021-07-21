var currentmode = "_main_hue"
var num = 1
var zoomIn = 1;


$("#div" + num + "_00" + currentmode).addClass("is-visible");


var alltiles = document.getElementById("alltiles");
var alert_msg = document.getElementById('alert')
alltiles.onwheel = zoom;



//button mode
$(document).ready(function() {

    $("#main_hue").addClass("visible");
    $("#modebtn a").click(function() {

        var newmode = $(this).attr('href');
        currentmode = $(this).attr('href');

        currentmode = currentmode.replace("#", "_")
        var el = document.getElementById("div" + num + "_00" + currentmode);
        el.style.transform = `scale(${zoomIn})`;
        console.log(currentmode)
        $(el).addClass("is-visible");
        $(".mode").removeClass("visible");
        $(newmode + '').addClass("visible");
    });



    $("#infobutton").click(function() {
        var panel = document.getElementById("info_panel");
        var currentvalue = document.getElementById("infobutton").value;
        if (currentvalue == "Off") {
            document.getElementById("infobutton").value = "On";
            panel.style.height = "100%";
            panel.style.opacity = "1";
        } else {
            document.getElementById("infobutton").value = "Off";
            panel.style.height = "0";
            panel.style.opacity = "0";
        }

    });

});






function zoombtn(dir) {
    console.log("num" + num)
        //var el = document.getElementById("div" + num + "_00" + currentmode);
        // console.log("num is " + num + "currentmode is " + currentmode)
    console.log("zoomIn:" + zoomIn)
        //zoom in 
    if (dir === 1) {
        zoomIn += .334
        zooming()
    }

    //zoomout
    if (dir === 2) {
        zoomIn -= .334
        zooming()
    }
}

function zoom(event) {
    event.preventDefault();
    // console.log("num is " + num + "currentmode is " + currentmode)
    console.log("zoomIn:" + zoomIn)
        //set up ZoomIn according to event
    zoomIn += event.deltaY * -0.00334;
    //console.log("zoom in before" + zoomIn)
    // Restrict scale
    // zoomIn = Math.min(Math.max(.125, zoomIn), 4);
    //console.log("zoom in after" + zoomIn)
    //console.log("zoomIn :" + zoomIn)
    zooming();

}


function zooming() {
    console.log("num" + num)

    var el = document.getElementById("div" + num + "_00" + currentmode);


    if (zoomIn >= 1 && zoomIn <= 2) {
        el.style.transform = `scale(${zoomIn})`;
    }
    if (zoomIn > 2) {
        $(el).removeClass("is-visible");
        if (num < 1024) { num *= 2 }

        // if (num > 1024) {
        //     num = 1024
        //     console.log("You have reached the maximum zoom level")
        //     zoomIn = 1.99999
        // }

        el = document.getElementById("div" + num + "_00" + currentmode)
        $(el).addClass("is-visible");
        zoomIn = 1
    }

    var el = document.getElementById("div" + num + "_00" + currentmode);

    if (zoomIn < 1) {
        $(el).removeClass("is-visible");
        if (num > 1) { num /= 2 }

        // if (num < 1) {
        //     num = 1
        //     console.log("You have reached the minimum zoom level")
        //     zoomIn = 1.1111


        // }


        alert_msg.style.display = "none"
        el = document.getElementById("div" + num + "_00" + currentmode)
        $(el).addClass("is-visible");
        zoomIn = 1.9999999
    }

}

window.addEventListener('gesturestart', e => e.preventDefault());
window.addEventListener('gesturechange', e => e.preventDefault());
window.addEventListener('gestureend', e => e.preventDefault());