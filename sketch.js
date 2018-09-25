function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
	background(200);

	//Neck
	strokeWeight(0);
	fill(60,60,255);
	rectMode(CENTER)
	rect(250, 285, 25, 150);

	//Wheel ext
	fill(60,60,200);
	ellipse(290, 465, 70, 70);
	ellipse(210, 465, 70, 70);
	rect(250, 465, 70, 70);
	//Wheel inside
	fill(60,60,255);
	ellipse(290, 465, 40, 40);
	ellipse(210, 465, 40, 40);
	rect(250, 465, 80, 40);
	//Small wheels
	fill(60,60,170);
	ellipse(290, 465, 30, 30);
	ellipse(210, 465, 30, 30);
	ellipse(250, 465, 30, 30);

	//Arms
	rect(170, 310, 80, 20, 20);
	rect(330, 310, 80, 20, 20);
	rect(140, 290, 20, 60, 20);
	rect(360, 290, 20, 60, 20);
	//Hands
	fill(60,60,220);
	rect(140, 270, 55, 20, 20); //left
	rect(120, 260, 20, 40, 20);
	rect(160, 260, 20, 40, 20);
	ellipse(140, 280, 30, 30);
	rect(360, 270, 55, 20, 20); //right
	rect(380, 260, 20, 40, 20);
	rect(340, 260, 20, 40, 20);
	ellipse(360, 280, 30, 30);


  //Body
	fill(70,147,240);
	rect(250, 360, 110, 140, 15);
	fill(60,60,255);
	rect(270, 370, 80, 90, 15);
	fill(60,60,170);


	//Head
	fill(70,147,230);
	ellipse(250, 220, 90, 90);
	//Eyes
	fill(230,230,255);
	rect(250, 210, 65, 30, 10);
  fill(255, 40, 140);
	ellipse(230, 205, 12, 12);
	ellipse(270, 205, 12, 12);
	rect(250, 215, 30, 10, 10);

	//Flying thing

	fill(70,147,230);
	ellipse(mouseX, mouseY-10, 65);
	fill(230,230,255);
	rect(mouseX, mouseY, 35, 25, 10);
	fill(255, 40, 140);
	ellipse(mouseX+5, mouseY+2, 12, 12);



}
document.onclick = function(e){console.log(e.clientX,e.clientY)}
