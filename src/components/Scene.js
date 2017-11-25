export default class Scene{
	constructor(){

	}

	sceneObjects = [];


	add = (sceneObject, position) => {

		position ? this.sceneObjects.splice( position, 0, sceneObject ) : this.sceneObjects.push( sceneObject );

    };


	remove = sceneObject => this.sceneObjects = this.sceneObjects.filter( obj => obj === sceneObject );
}
