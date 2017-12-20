import Geometry from '../components/shapes/Geometry';

let g1 = new Geometry();
g1.interactive = true;
g1.alpha = 0.5;
g1.fillStyle('#45B7D6');
g1.position = {x:100, y:100};
g1.rotationPoint = {x:150, y:150};
g1.drawRect( -50, -50, 100, 100 );


let g2 = new Geometry();
g2.interactive = true;
g2.position = {x:350, y:100};
g2.alpha = 0.3;
g2.beginPath()
	.moveTo(25, -25)
	.fillStyle('#3EEEB9')
	.strokeStyle('#FF0004')
	.quadraticCurveTo(-25,-25,-25,12.5)
	.quadraticCurveTo(-25,50,0,50)
	.quadraticCurveTo(0,70,-40,75)
	.quadraticCurveTo(10,70,15,50)
	.quadraticCurveTo(75,50,75,12.5)
	.quadraticCurveTo(75,-25,25,-25)
	.fill()
	.stroke()
	.closePath();


let g3 = new Geometry();
g3.alpha = 0.60;
g3.fillStyle('#D245D8');
g3.interactive = true;
g3.position = {x:200, y:200};
g3.rotationPoint = {x:150, y:150};
g3.drawRect( -50, -50, 100, 100 );


g1.on('click', data => console.log('⇒ g1', data));
g2.on('click', data => console.log('⇒ g2', data));
g3.on('click', data => console.log('⇒ g3', data));


let rotate = () => {
	g1.rotate += 0.1;
	g2.rotate += 0.5;
	g3.rotate -= 0.1;
	requestAnimationFrame( rotate );
};
rotate();


export {g1, g2, g3};
