 // create your variables.
         let selBrush = 0;

          let leaf;
          let brush;
          let eraserImage;
          let yellow;
          let red;
          let orange;
          let save;

        var easing = 0.05
		var x = 250;
		var y = 300;

		//preload your images and fonts.

function preload() {
            leaf = loadImage("leaf.png");
            brush = loadImage("brush.png");
            eraserImage = loadImage("EraserImage.png");
            yellow = loadImage("yellow.png");
            red = loadImage("red.png");
            orange = loadImage("orange.png");
            save = loadImage("save.png");
}

          function setup() {
            createCanvas(600, 500);
            background(255);
            stroke(255, 255, 255);
            strokeWeight(4);
            }

           function draw() {
            fill(255);
            rectMode(CENTER);
            fill(82,99,59);
            rect(600, 200, 140, 600);

            smooth();
            //leaf image
            image(leaf, 535, 0, 60, 60);
            //pen image
            image(brush, 535, 65, 60, 60);
            //eraser image
            image(eraserImage, 535, 130, 60, 60);
            //colorYellow image
            image(yellow, 535, 210, 60, 60);
            //colorRed image
            image(red, 535, 275, 60, 60);
            //colorOrange image
            image(orange, 535, 340, 60, 60);
            //save image
            image(save, 535, 430, 60, 60);

                        if (mouseIsPressed) {
              if (mouseX > 525) {
                //foglia
                if (mouseY > 0 && mouseY < 68) selBrush = 8;
                //line green
                else if (mouseY > 68 && mouseY < 131) selBrush = 9;
                //eraser
                else if (mouseY > 131 && mouseY < 205) selBrush = 1;
                //yellow
                else if (mouseY > 205 && mouseY < 260) selBrush = 3;
                //red
                else if (mouseY > 260 && mouseY < 332) selBrush = 5;
                //orange
                else if (mouseY > 332 && mouseY < 376) selBrush = 6;
                //save
                else if (mouseY > 433 && mouseY < 488) {
                   let img = get(0, 0, width, height);
                   img.save("drawing.png");
                };
              } else {
                if(selBrush == 9 || selBrush == 3 || selBrush == 5 || selBrush == 6) {
                  line(mouseX, mouseY, pmouseX, pmouseY);
                   if(selBrush == 9) {
                  stroke(82,99,59);
                } else if(selBrush == 3) {
                  stroke(255, 226, 10);
                } else if(selBrush == 5) {
                  stroke(165, 33, 33);
                }else if(selBrush == 6) {
                  stroke(237, 166, 64);
                };
                }
                else if (selBrush == 1)
                image(loadImage("EraserBrush.png"), x - 50, y - 50);
              }

            }
            x += (mouseX - x) * easing;
            y += (mouseY- y) *easing;
          }//close draw