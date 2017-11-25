import './styles/app.sass';
import Engine from './components/Engine';
import Square from './components/rObjects/Square';

const ctx = document.querySelector('#squares').getContext('2d');

const engine = new Engine(ctx);

const squares = [
	{id: 0, x: 100, y: 100, w: 100, h: 100, fill: '#6ECDFF', border: '#4C3784', scale: 1, scaleSpeed: 0.001, angle: 0, angleSpeed: 0.2},
	{id: 1, x: 400, y: 100, w: 100, h: 100, fill: '#3CFFBE', border: '#4C3784', scale: 1, scaleSpeed: 0.002, angle: 0, angleSpeed: -0.2},
	{id: 2, x: 100, y: 400, w: 100, h: 100, fill: '#FFF56C', border: '#4C3784', scale: 1, scaleSpeed: 0.004, angle: 0, angleSpeed: -0.3},
	{id: 3, x: 400, y: 400, w: 100, h: 100, fill: '#CB85FF', border: '#4C3784', scale: 1, scaleSpeed: 0.005, angle: 0, angleSpeed: 0.4},
	{id: 4, x: 250, y: 250, w: 100, h: 100, fill: '#96FF6A', border: '#4C3784', scale: 1, scaleSpeed: 0.01, angle: 0, angleSpeed: 0.7},
];
const rSq = [];
for(let i=0; i<5; i+=1){

	rSq.push( new Square( squares[i] ) );

}

engine.render.start( rSq );
