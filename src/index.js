import './styles/app.sass';
import Engine from './components/Engine';
import Geometry from './components/rObjects/Geometry';

const ctx = document.querySelector('#squares').getContext('2d');

const engine = new Engine(ctx);

// const squares = [
// 	{id: 0, x: 100, y: 100, w: 100, h: 100, fill: '#6ECDFF', border: '#4C3784', scale: 1, scaleSpeed: 0.001, angle: 0, angleSpeed: 0.2},
// 	{id: 1, x: 400, y: 100, w: 100, h: 100, fill: '#3CFFBE', border: '#4C3784', scale: 1, scaleSpeed: 0.002, angle: 0, angleSpeed: -0.2},
// 	{id: 2, x: 100, y: 400, w: 100, h: 100, fill: '#FFF56C', border: '#4C3784', scale: 1, scaleSpeed: 0.004, angle: 0, angleSpeed: -0.3},
// 	{id: 3, x: 400, y: 400, w: 100, h: 100, fill: '#CB85FF', border: '#4C3784', scale: 1, scaleSpeed: 0.005, angle: 0, angleSpeed: 0.4},
// 	{id: 4, x: 250, y: 250, w: 100, h: 100, fill: '#96FF6A', border: '#4C3784', scale: 1, scaleSpeed: 0.01, angle: 0, angleSpeed: 0.7},
// ];
// const rSq = [];
// for(let i=0; i<5; i+=1){
//
// 	rSq.push( new Geometry( squares[i] ) );
//
// }


let g1 = new Geometry();

g1.position = {x: 100, y: 100};
g1.fillStyle = '#6ECDFF';
g1.alpha = 0.5;
g1.rotate = 0;
g1.strokeRect = [0, 0, 100, 100, '#515AFF'];
g1.fillRect = [0, 0, 100, 100, '#6ECDFF'];


let g2 = new Geometry();

g2.position = {x: 200, y: 200};
g2.fillStyle = '#3CFFBE';
g2.alpha = 0.5;
g2.rotate = 0;
g2.strokeRect = [0, 0, 100, 100, '#4C3784'];
g2.fillRect = [0, 0, 100, 100, '#3CFFBE'];


let rotate = () => {
    g1.rotate += 1;
    requestAnimationFrame( rotate );
};
let rotate2 = () => {
    g2.rotate -= 2;
    requestAnimationFrame( rotate2 );
};
rotate();
rotate2();

engine.render.start();

engine.addRenderObject( g1 );
engine.addRenderObject( g2 );


