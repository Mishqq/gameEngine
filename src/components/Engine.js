import Render from './Render';
import Scene from './Scene';
import {EVENTS} from './defs/defs';
import Container from './shapes/Container';
import Geometry from './shapes/Geometry';

class Engine {
	constructor(ctx){
		this.ctx = ctx;

		this.scene = new Scene();

		this.render = new Render( this.ctx );

		this.addEventHandlers();
	}


	addEventHandlers = () => {
		let _ctx = this;

		for(let eventName in EVENTS.interactive){
			this.ctx.canvas.addEventListener(EVENTS.interactive[ eventName ], _ctx.eventMapHandler);
		}

	};

	eventMapHandler = event => {
		if(event.type === EVENTS.interactive.click){

			let currentScene = this.render.getRenderingScene();

			let callStack = [];
			let checkPoint = (object) => {
				object.children.forEach( child => {

					if( child.interactive ) callStack.push( child );

					if( child.children ) checkPoint( child )

				})
			};
			checkPoint( currentScene );

			callStack.forEach( interactiveChild => interactiveChild.isPointInPath(event.layerX, event.layerY) )
		}
	};


	startRender = sceneName => {

        this.render.start( sceneName ? this.scene.scenes[ sceneName ] : this.scene.scenes.default );

	};


	stopRender = sceneName => {

		this.render.stop();

	};


    addScene = scene => {

        this.scene.addScene( scene );

	};


    switchScene = sceneName => {

    	this.render.setRenderingScene( this.scene.scenes[ sceneName ] );

    };


    get allSenes(){
    	return this.scene.scenes;
    };


    get currentScene(){
    	return this.render.getRenderingScene()
    }
}

export {Engine, Container, Geometry};
