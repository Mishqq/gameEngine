export default class Scene{
	constructor(){

	}

	sceneObjects = [];


	add = sceneObject => this.sceneObjects.push( sceneObject );


	remove = sceneObject => this.sceneObjects = this.sceneObjects.filter( obj => obj === sceneObject );
}
