export default class Event {
	constructor( type, targetObject ){

		this.type = type;

		this.targetObject = targetObject;

		this._stopped = false;

	}


	stopPropagation(){

		this._stopped = true;

	}
}
