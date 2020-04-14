import eventManager from './EventManager';

class InteractiveManager {
	constructor(ctx, render, getScene){

		this.ctx = ctx;

		this.render = render;

		this.canvas = ctx.canvas;

		this.getScene = getScene;

		this.canvas.addEventListener('click', event => this.clickHandler( this.getScene(), event ) );

		this.render.on('click', data => eventManager.bubbleEvent({
			type: data.type,
			currentObject: data.data[ data.data.length-1 ]
		}))
	}



	clickHandler( sceneTree, event ){

		this.render.eventPos = {x: event.layerX, y: event.layerY};

	}

}

export default InteractiveManager;
