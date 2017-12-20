import './styles/app.sass';

import {Engine, Scene, Container, Geometry} from './components/Engine';
import {g1 as aG1, g2 as aG2, g3 as aG3} from './examples/animateRenderGeometry';
import {g1 as sG1, g2 as sG2} from './examples/staticRenderGeometry';
import Graph from './examples/christmasTree';
import sceneTree from './examples/sceneTree';

const canvas = document.querySelector('#squares');
const ctx = canvas.getContext('2d');
const engine = new Engine(ctx);


/**
 * Сборка сцены по заранее определённому шаблону
 */
let sceneThree = engine.sceneBuilder.createTree( sceneTree );

let graph = new Graph({pointCount: 10, pointLinkCount: 3, radius: 10, brace: 30, range: [50, 50, 400, 400]});


/**
 * Старт рендеринга текущей сцены
 */
engine.startRender();


/**
 * Добавление новой сцены
 */
engine.addScene({'sceneTwo': new Container()});
engine.addScene({'sceneThree': sceneThree});


/**
 * Добавление элементов на сцены
 */
engine.allSenes.default.addChild( graph.path );
// engine.allSenes.default.addChildren( [sG1, sG2] );
engine.allSenes.sceneTwo.addChildren( [aG1, aG2, aG3] );



/**
 * Переключение сцен
 */
let sceneSwitcher = document.querySelector('.sceneSwitcher');
const switchScene = event => {
	event.path.forEach( child => {
		if(child.className === 'list__item') {

			for(let i=0; i<sceneSwitcher.children.length; i+=1)
				sceneSwitcher.children[i].classList.remove('list__item_active')

			child.classList.add('list__item_active');
			engine.switchScene( child.getAttribute('data-scene') );
		}
	});

};
sceneSwitcher.addEventListener( 'click', switchScene);

