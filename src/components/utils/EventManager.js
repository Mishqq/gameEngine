import Event from './Event';

class EventManager {
	constructor(){

	}

	/**
	 * Метод поднимает событие по дереву рендера.
	 * @param eventProto
	 */
	bubbleEvent( eventProto ){
		let {type, currentObject} = eventProto;
		let event = new Event( type, currentObject );

		const recurBubbling = (object, event) => {
			object.emit( event.type, event );

			if( event.stopped || !object.parent ) return false;

			if( object.parent ) recurBubbling( object.parent, event );
		};
		recurBubbling( currentObject, event );
	}
}

export default new EventManager();
