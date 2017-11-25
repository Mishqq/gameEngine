import Render from './Render';
import Scene from './Scene';

export default class Engine{
	constructor(ctx){
		this.ctx = ctx;

		this.scene = new Scene();

		this.render = new Render( this.ctx );
	}


	startRender = () => {

        this.render.start();

	};


    addRenderObject = (object, position) => {

        this.scene.add(object, position);

        this.render.renderObjects( this.scene.sceneObjects );

	};
}
