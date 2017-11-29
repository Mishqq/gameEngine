export default class EventEmitter{
	constructor(){

		this._observers = new Map();

	};


	/**
	 *
	 * @param eventName
	 * @param subscriber
	 */
	on = (eventName, subscriber) => {

		if(!this._observers.get( this )) this._observers.set( this, {} );

		let contextObservers = this._observers.get( this );

		contextObservers[ eventName ] ?
			contextObservers[ eventName ].push( subscriber ) :
			contextObservers[ eventName ] = [ subscriber ];
	};


	/**
	 *
	 * @param eventName
	 * @param subscriber
	 */
	off = (eventName, subscriber) => {

		let contextObservers = this._observers.get( this );

		contextObservers[ eventName ] = contextObservers[ eventName ].filter( sub => sub !== subscriber );

	};


	/**
	 *
	 * @param eventName
	 * @param data
	 */
	emit = (eventName, data) => {

		let contextObservers = this._observers.get( this );

		let contextSubscribers = contextObservers[ eventName ];

		if(contextSubscribers) contextSubscribers.forEach( sub => sub( Object.assign({type: eventName}, data) ));

	};
}
