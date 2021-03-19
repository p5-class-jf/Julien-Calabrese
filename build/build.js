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
function draw() {
    randomSeed(params.raffraichissement);
    background('black');
    rectMode(CENTER);
    translate(width / 2, height / 2);
    for (var i = 0; i <= random(30, 45); i++) {
        for (var t = 0; t < 1; t += 0.1) {
            var couleur = lerpColor(color(255, 0, 0, params.transparenceR), color(255, 255, 0, params.transparenceJ), t);
            var y = lerp(random(40, 60), random(90, 120), t);
            stroke(couleur, params.transparence);
            line(random(-16, -24), params.centre1, random(50, 100), y);
        }
    }
    for (var i = 0; i <= random(30, 45); i++) {
        for (var t = 0; t < 1; t += 0.1) {
            var couleur = lerpColor(color(255, 0, 0, params.transparenceR), color(255, 255, 0, params.transparenceJ), t);
            var y = lerp(random(-40, -60), random(-90, -115), t);
            stroke(couleur, params.transparence);
            line(random(-16, -24), params.centre1, random(-50, -100), y);
        }
    }
    var existence12 = random(1, 10);
    if (existence12 <= 9) {
        for (var i = 0; i <= random(30, 45); i++) {
            for (var t = 0; t < 1; t += 0.1) {
                var couleur = lerpColor(color(255, 0, 0, params.transparenceR), color(255, 255, 0, params.transparenceJ), t);
                var y = lerp(random(-10, 10), random(70, 90), t);
                stroke(couleur, params.transparence);
                line(random(-16, -24), params.centre1, random(-100, -150), y);
            }
        }
    }
    var existence13 = random(1, 9);
    if (existence13 <= 8) {
        for (var i = 0; i <= random(30, 45); i++) {
            for (var t = 0; t < 1; t += 0.12) {
                var couleur = lerpColor(color(255, 0, 0, params.transparenceR), color(255, 255, 0, params.transparenceJ), t);
                var y = lerp(random(40, 60), random(-10, 10), t);
                stroke(couleur, params.transparence);
                line(random(-16, -24), params.centre1, random(50, 150), y);
            }
        }
    }
    var existence21 = random(1, 8);
    if (existence21 <= 7) {
        for (var i = 0; i <= random(30, 45); i++) {
            for (var t = 0; t < 1; t += 0.1) {
                var couleur = lerpColor(color(255, 0, 0, params.transparenceR), color(255, 255, 0, params.transparenceJ), t);
                var y = lerp(random(-40, -60), random(-90, -120), t);
                stroke(couleur, params.transparence);
                line(random(40, 48), params.centre2, random(150, 200), y);
            }
        }
    }
    var existence22 = random(1, 8);
    if (existence22 <= 7) {
        for (var i = 0; i <= random(30, 45); i++) {
            for (var t = 0; t < 1; t += 0.1) {
                var couleur = lerpColor(color(255, 0, 0, params.transparenceR), color(255, 255, 0, params.transparenceJ), t);
                var y = lerp(random(-200, -250), random(-210, -250), t);
                stroke(couleur, params.transparence);
                line(random(40, 48), params.centre2, random(-50, -100), y);
            }
        }
    }
    var existence23 = random(1, 6);
    if (existence23 <= 5) {
        for (var i = 0; i <= random(30, 45); i++) {
            for (var t = 0; t < 1; t += 0.1) {
                var couleur = lerpColor(color(255, 0, 0, params.transparenceR), color(255, 255, 0, params.transparenceJ), t);
                var y = lerp(random(-50, -70), random(0, -30), t);
                stroke(couleur, params.transparence);
                line(random(40, 48), params.centre2, random(-100, -150), y);
            }
        }
    }
    var existence24 = random(1, 4);
    if (existence24 <= 3) {
        for (var i = 0; i <= random(30, 45); i++) {
            for (var t = 0; t < 1; t += 0.12) {
                var couleur = lerpColor(color(255, 0, 0, params.transparenceR), color(255, 255, 0, params.transparenceJ), t);
                var y = lerp(random(-200, -220), random(-30, -50), t);
                stroke(couleur, params.transparence);
                line(random(40, 48), params.centre2, random(-100, -150), y);
            }
        }
    }
    var existence31 = random(0, 2);
    if (existence31 <= 1) {
        for (var i = 0; i <= random(30, 45); i++) {
            for (var t = 0; t < 1; t += 0.1) {
                var couleur = lerpColor(color(255, 0, 0, params.transparenceR), color(255, 255, 0, params.transparenceJ), t);
                var y = lerp(random(40, 60), random(150, 220), t);
                stroke(couleur, params.transparence);
                line(random(-108, -100), params.centre3, random(100, 150), y);
            }
        }
    }
    var existence32 = random(0, 3);
    if (existence32 <= 1) {
        for (var i = 0; i <= random(30, 45); i++) {
            for (var t = 0; t < 1; t += 0.1) {
                var couleur = lerpColor(color(255, 0, 0, params.transparenceR), color(255, 255, 0, params.transparenceJ), t);
                var y = lerp(random(30, 50), random(10, 50), t);
                stroke(couleur, params.transparence);
                line(random(-108, -100), params.centre3, random(50, 100), y);
            }
        }
    }
    var existence33 = random(0, 3);
    if (existence33 <= 1) {
        for (var i = 0; i <= random(30, 45); i++) {
            for (var t = 0; t < 1; t += 0.1) {
                var couleur = lerpColor(color(255, 0, 0, params.transparenceR), color(255, 255, 0, params.transparenceJ), t);
                var y = lerp(random(50, 70), random(100, 120), t);
                stroke(couleur, params.transparence);
                line(random(-108, -100), params.centre3, random(-150, -250), y);
            }
        }
    }
    var existence34 = random(0, 4);
    if (existence34 <= 1) {
        for (var i = 0; i <= random(30, 45); i++) {
            for (var t = 0; t < 1; t += 0.1) {
                var couleur = lerpColor(color(255, 0, 0, params.transparenceR), color(255, 255, 0, params.transparenceJ), t);
                var y = lerp(random(250, 270), random(100, 120), t);
                stroke(couleur, params.transparence);
                line(random(-108, -100), params.centre3, random(-150, -250), y);
            }
        }
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