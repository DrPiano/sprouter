let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext("2d");

let x = canvas.width/2;
let y = canvas.height/2;



function animate(){
	requestAnimationFrame(animate);
	move();
	c.fillStyle = randomAlpha();
	c.fillRect(x,y,1,1);
}

function move() {
	let direction = Math.floor(Math.random() * 8);

	switch(direction){
		case 0: //up
			y -=1;
			break;
		case 1: //down
			y += 1;
			break;
		case 2: //left
			x -= 1;
			break;
		case 3: //right
			x += 1;
			break;
		case 4: //upleft
			x -= 1;
			y -= 1;
			break;
		case 5: //up right
			x += 1;
			y -= 1;
			break;
		case 6: //downleft
			x -= 1;
			y += 1;
			break;
		case 7: //downright
			x += 1;
			y += 1;
	}

}

function randomColor(){
	let red = Math.floor(Math.random() * 255);
	let green = Math.floor(Math.random() * 255);
	let blue = Math.floor(Math.random() * 255);

	let color = "rgb(" + red + "," + green + "," + blue + ")"; 
	return color;
}

function randomAlpha(){
	let alpha = Math.floor(Math.random() * 10);

	let rgba = "rgba(0,0,0,0." + alpha + ")";
	return rgba;
}

animate();

