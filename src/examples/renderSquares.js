import Geometry from '../components/rObjects/Geometry';

let g1 = new Geometry();
g1.position = {x: 100, y: 100};
g1.setRotationPoint({x: 150, y: 150});
g1.alpha = 0.5;
g1.rotate = 0;
g1
	.startShape()
	.fillStyle('#6ECDFF')
	.fillRect([0, 0, 100, 100])
	.strokeStyle('#384AC1')
	.strokeRect([0, 0, 100, 100]);


let g2 = new Geometry();
g2.position = {x: 150, y: 150};
g2.setRotationPoint({x: 200, y: 200});
g2.alpha = 0.5;
g2.rotate = 0;
g2
	.startShape()
	.fillStyle('#52FFA9')
	.fillRect([0, 0, 100, 100])
	.strokeStyle('#007D5C')
	.strokeRect([0, 0, 100, 100]);


let g3 = new Geometry();
g3.position = {x: 200, y: 100};
g3.setRotationPoint({x: 250, y: 150});
g3.alpha = 0.5;
g3.rotate = 0;
g3
	.startShape()
	.fillStyle('#FF7DCE')
	.fillRect([0, 0, 100, 100])
	.strokeStyle('#93224D')
	.strokeRect([0, 0, 100, 100]);


let rotate = () => {
	g1.rotate -= 0.1;
	g2.rotate += 0.1;
	g3.rotate += 0.1;
	requestAnimationFrame( rotate );
};

rotate();


export {g1, g2, g3};
