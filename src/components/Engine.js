import Render from './Render';
import Scene from './Scene';
import Container from './rObjects/Container';
import Geometry from './rObjects/Geometry';

class Engine {
	constructor(ctx){
		this.ctx = ctx;

		this.scene = new Scene();

		this.render = new Render( this.ctx );
	}


	startRender = sceneName => {

        this.render.start( sceneName ? this.scene.scenes[ sceneName ] : this.scene.scenes.default );

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
