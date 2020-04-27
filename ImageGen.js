function drawClear(){
    console.log("Huzzah!")
    var c = document.getElementById("mainImage");
    var ctx = c.getContext("2d");

    var imgData = ctx.createImageData(500, 500);

    for (var i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i + 0] = 255;
        imgData.data[i + 1] = 255;
        imgData.data[i + 2] = 255;
        imgData.data[i + 3] = 255;
    }

    ctx.putImageData(imgData, 0, 0);
}

function drawCircle(){
    console.log("Huzzah!")
    var c = document.getElementById("mainImage");
    var ctx = c.getContext("2d");

    ctx.beginPath(0, 0);
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawGradient(){
    var c = document.getElementById("mainImage");
    var ctx = c.getContext("2d");

    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}

function drawRGradient(){
    var c = document.getElementById("mainImage");
    var ctx = c.getContext("2d");

    // Create gradient
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
} 


function render(type, width, height){
    var c = document.getElementById("mainImage");
    var ctx = c.getContext("2d");

    var imgData = ctx.createImageData(width, height);

    switch(type) {
        case 1:
            //cellular
            break;
        case 2:
            //rewrite
            rewrite_prep(imgData, width, height);
            break;
        case 3:
            //painterly
            break;
        case 4:
            //fractal
            break;
        case 5:
            //sorter
            break;
        default:
            //none
    }

    ctx.putImageData(imgData, 0, 0);
}