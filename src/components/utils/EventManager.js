import Event from './Event';

class EventManager {
	constructor(){

	}


	createEvent( targetObject ){

		return new Event( targetObject );

	}


	bubbleEvent( targetObject, event ){

		targetObject.emit( event );

		if( event._stopped || !targetObject.parent ) return false;

		if( targetObject.parent && targetObject.parent.interactive ) this.bubbleEvent( targetObject.parent );

	}
}

export default new EventManager();
