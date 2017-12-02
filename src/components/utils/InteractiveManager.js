import Event from './Event';
import {EVENTS} from '../defs/defs';

class InteractiveManager {
	constructor(ctx, render, getScene){

		this.ctx = ctx;

		this.render = render;

		this.canvas = ctx.canvas;

		this.getScene = getScene;

		this.canvas.addEventListener('click', event => this.clickHandler( this.getScene(), event ) );

		this.render.on('clickedObjects', data => this.clickedObjects( data ))
	}

	static createEvent( targetObject ){
		return new Event( targetObject );
	}


	clickHandler( sceneTree, event ){

		this.render.eventPos = {x: event.layerX, y: event.layerY};

	}


	clickedObjects( data ){

		let currentObject = data.data[ data.data.length-1 ];

		if(currentObject.interactive) this.bubbleEvent( currentObject, {
			type: 'click',
			targetObject: currentObject
		} );

	}


	bubbleEvent( targetObject, event ){

		targetObject.emit( event.type,  {targetObject: targetObject});
		if( targetObject.parent ) this.bubbleEvent( targetObject.parent, event );

		// if( event._stopped || !targetObject.parent ) return false;
		//
		// if( targetObject.parent && targetObject.parent.interactive ) this.bubbleEvent( targetObject.parent );

	}



}

export default InteractiveManager;
