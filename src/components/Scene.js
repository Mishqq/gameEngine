import Container from './rObjects/Container';

export default class Scene{
	constructor(){

		this.scenes = {
			default: new Container()
		};

	}


	addScene = ( scene ) => {

		Object.assign( this.scenes, scene );

    };

}
