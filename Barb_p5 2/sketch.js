function setup() {
    createCanvas(400, 400);
//background
    background(200, 100, 220);
}

function draw() {
    noStroke();
    fill(180, 150, 250);
    ellipse(mouseX, mouseY, 15, 15);
}
function mousePressed() {
    background(200, 100, 220);
}