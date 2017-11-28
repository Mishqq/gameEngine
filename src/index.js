import './styles/app.sass';

import {Engine, Container, Geometry} from './components/Engine';
import {g1, g2, g3} from './examples/renderSquares';

const canvas = document.querySelector('#squares');
const ctx = canvas.getContext('2d');
const engine = new Engine(ctx);



engine.startRender();

engine.addScene( {sceneOne: new Container()} );
engine.addScene( {sceneTwo: new Container()} );

let allScenes = engine.allSenes;

allScenes.default.addChild( g1 );

allScenes.sceneOne.addChild( g2 );
allScenes.sceneOne.addChild( g3 );

let sceneSwitcher = document.querySelectorAll('.sceneSwitcher li');

sceneSwitcher.forEach( item => {
	item.addEventListener( 'click', event => {
		let sceneName = event.target.getAttribute('data-scene');
		engine.switchScene( sceneName );
	});
});


