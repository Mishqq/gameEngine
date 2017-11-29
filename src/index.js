import './styles/app.sass';

import {Engine, Container, Geometry} from './components/Engine';
import {g1, g2, g3} from './examples/renderSquares';

const canvas = document.querySelector('#squares');
const ctx = canvas.getContext('2d');
const engine = new Engine(ctx);

engine.startRender();

let allScenes = engine.allSenes;
g1.interactive = true;
g2.interactive = true;
g3.interactive = true;

allScenes.default.addChild( g1 );
g1.on('click', data => {
	console.log('⇒ По мне кликнули сука!', data);
});
// g1.addChild( g2 );
// allScenes.default.addChild( g3 );

let sceneSwitcher = document.querySelectorAll('.sceneSwitcher li');

sceneSwitcher.forEach( item => {
	item.addEventListener( 'click', event => {
		let sceneName = event.target.getAttribute('data-scene');
		engine.switchScene( sceneName );
	});
});
