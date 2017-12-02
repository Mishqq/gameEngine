import './styles/app.sass';

import {Engine, Container, Geometry} from './components/Engine';
import {g1 as aG1, g2 as aG2, g3 as aG3} from './examples/animateRenderGeometry';
import {g1 as sG1, g2 as sG2} from './examples/staticRenderGeometry';
import sceneTree from './examples/sceneTree';

const canvas = document.querySelector('#squares');
const ctx = canvas.getContext('2d');
const engine = new Engine(ctx);

let scene = engine.sceneBuilder.createTree( sceneTree );
console.log('⇒ scene', scene);

engine.startRender();

let allScenes = engine.allSenes;

// allScenes.default.addChildren( [aG1, aG2, aG3] );
allScenes.default.addChildren( [sG1, sG2] );


let sceneSwitcher = document.querySelectorAll('.sceneSwitcher li');

sceneSwitcher.forEach( item => {
	item.addEventListener( 'click', event => {
		let sceneName = event.target.getAttribute('data-scene');
		engine.switchScene( sceneName );
	});
});
