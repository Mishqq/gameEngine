export default class Square{
	constructor(settings){

		for( let key in settings  ){

			this[ key ] = settings[ key ];

		}

	}
}
