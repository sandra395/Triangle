function setup() {
  createCanvas(400, 350); // Create the canvas
  background('rgba(255,0,0,0.10)'); /* Red with 10% transparency.
  Basically, the color loses its intensity, appearing more transparent. */

  /* With frameRate() we control the execution speed of the program
     so that the draw() function repeats more slowly. */
  frameRate(2); // Two frames per second
  
  noStroke(); // Remove the default stroke
  
  fill('white'); // Some colors have predefined names
  triangle(200, 50, 350, 300, 50, 300); // Draw the triangle
}

function draw() {
  background('rgba(255,0,0,0.10)'); /* Red with 10% transparency.
  Basically, the color loses its intensity, appearing more transparent. */
  
  /* The code inside the setup function runs only once
     (that’s why the triangle was only drawn once), whereas the 
     code inside the draw function runs continuously until the 
     program stops. That’s why the entire red background 
     keeps running, making the red color change from lighter to darker. */
  
  fill('white'); // Some colors have predefined names
  triangle(200, 50, 350, 300, 50, 300); // Draw the triangle
  
  /* By placing the triangle inside the draw function, both the 
     background and the triangle are drawn continuously.
     The background changes from lighter to darker, and then 
     the white triangle is drawn over it constantly. */
}
