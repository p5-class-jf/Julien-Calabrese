var gui = new dat.GUI();
var params = {
    raffraichissement: 0,
    transparenceR: 255,
    transparenceJ: 200,
    centre1: 0,
    centre2: -150,
    centre3: 150,
    Download_Image: function () { return save(); },
};
gui.add(params, "raffraichissement", 0, 100, 1);
gui.add(params, "transparenceR", 0, 255, 1);
gui.add(params, "transparenceJ", 0, 255, 1);
gui.add(params, "centre1", -100, 100, 1);
gui.add(params, "centre2", -250, -50, 1);
gui.add(params, "centre3", 50, 250, 1);
gui.add(params, "Download_Image");
function draw_some_lines(min_y_begin, max_y_begin, min_y_end, max_y_end, min_x_begin, max_x_begin, min_x_end, max_x_end, center, t_increment) {
    for (var i = 0; i <= random(30, 45); i++) {
        for (var t = 0; t < 1; t += t_increment) {
            var couleur = lerpColor(color(255, 0, 0, params.transparenceR), color(255, 255, 0, params.transparenceJ), t);
            var y = lerp(random(min_y_begin, max_y_begin), random(min_y_end, max_y_end), t);
            stroke(couleur);
            line(random(min_x_begin, max_x_begin), center, random(min_x_end, max_x_end), y);
        }
    }
}
function draw() {
    randomSeed(params.raffraichissement);
    background('black');
    rectMode(CENTER);
    translate(width / 2, height / 2);
    draw_some_lines(40, 60, 90, 120, -16, -24, 50, 100, params.centre1, 0.1);
    draw_some_lines(-40, -60, -90, -115, -16, -24, -50, -100, params.centre1, 0.1);
    var existence12 = random(1, 10);
    if (existence12 <= 9) {
        draw_some_lines(-10, 10, 70, 90, -16, -24, -100, -150, params.centre1, 0.1);
    }
    var existence13 = random(1, 9);
    if (existence13 <= 8) {
        draw_some_lines(40, 60, -10, 10, -16, -24, 50, 150, params.centre1, 0.12);
    }
    var existence21 = random(1, 8);
    if (existence21 <= 7) {
        draw_some_lines(-40, -60, -90, -120, 40, 48, 150, 200, params.centre2, 0.1);
    }
    var existence22 = random(1, 8);
    if (existence22 <= 7) {
        draw_some_lines(-200, -250, -210, -250, 40, 48, -50, -100, params.centre2, 0.1);
    }
    var existence23 = random(1, 6);
    if (existence23 <= 5) {
        draw_some_lines(-50, -70, 0, -30, 40, 48, -100, -150, params.centre2, 0.1);
    }
    var existence24 = random(1, 4);
    if (existence24 <= 3) {
        draw_some_lines(-200, -220, -30, -50, 40, 48, -100, -150, params.centre2, 0.12);
    }
    var existence31 = random(0, 2);
    if (existence31 <= 1) {
        draw_some_lines(40, 60, 150, 220, -108, -100, 100, 150, params.centre3, 0.1);
    }
    var existence32 = random(0, 3);
    if (existence32 <= 1) {
        draw_some_lines(30, 50, 10, 50, -108, -100, 50, 100, params.centre3, 0.1);
    }
    var existence33 = random(0, 3);
    if (existence33 <= 1) {
        draw_some_lines(50, 70, 100, 120, -108, -100, -150, -250, params.centre3, 0.1);
    }
    var existence34 = random(0, 4);
    if (existence34 <= 1) {
        draw_some_lines(250, 270, 100, 120, -108, -100, -150, -250, params.centre3, 0.1);
    }
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map