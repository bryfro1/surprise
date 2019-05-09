var diam1=0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background("#04f7f4");
  ellipse(250,250,400,400);
fill("#f6f306")
stroke("#0a0a08");
strokeWeight(5);
ellipse(250,300,diam1,diam1);
ellipse(200,200,50,50);
ellipse(300,200,50,50);

textSize(40);
textFont("Georgia");
textStyle(ITALIC);
textAlign(CENTER);
text("Surprised",400,470);

}

function mousePressed(){
	diam1=diam1+5;
}

