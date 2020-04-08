var newYear = new Date("jan 25, 2020 00:00:00").getTime();
var bg;
var fireworks = [];
var gravity;
var song;

function preload() {
    bg = loadImage('raw/lny_background2.jpg');
    song = loadSound('raw/firework_sound.mp4');
}


function setup() {
    
    createCanvas(1900,950);
    colorMode(HSB);
    gravity = createVector(0, 0.2);
    stroke(255);
    strokeWeight(4);
    background(0);

    textSize(width / 30);
    textAlign(CENTER, CENTER);
}

function draw() {
    // var now = new Date().getTime();
    // var remain = newYear - now;
    // var days = Math.floor((remain/(1000*60*60*24)));
    // var hours = Math.floor(((remain%(1000*60*60*24)))/(1000*60*60));
    // var minutes = Math.floor((remain% (1000*60*60))/(1000*60));
    // var seconds = Math.floor((remain % (1000*60))/ 1000);
    // var textCol = color('yellow');


    // if(seconds < 0) {
        if (!song.isPlaying()) {
            song.play();
        }
        colorMode(RGB);
        background(0,0,0,25);
        if (random(1) < 0.05) {
            this.fireworks.push(new Firework())
        }


        for (var i = this.fireworks.length - 1; i > 0 ; i-- ){
            this.fireworks[i].update();
            this.fireworks[i].show();

            if(this.fireworks[i].done()){
                fireworks.splice(i,1)
            }
        }
    // } else {
    //     clear();
    //     background(bg);
    //     fill(textCol);
    //     text(nf(days,2) + 'd:' + nf(hours,2) + 'h:' + nf(minutes,2)+ 'm:' + nf(seconds,2) + 's', 950, 475);
        
    // }
}

