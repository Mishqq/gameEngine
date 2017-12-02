import Geometry from './shapes/Geometry';
import Container from './shapes/Container';

class SceneBuilder {
	static createElement( rootObj, descriptionObject ){

		if(descriptionObject.type === 'container'){


			let newContainer = new Container();

			if(descriptionObject.name) newContainer.name = descriptionObject.name;
			if(descriptionObject.position) newContainer.name = descriptionObject.position;

			rootObj.addChild( newContainer );

			if(descriptionObject.children)
				descriptionObject.children.forEach( child => SceneBuilder.createElement(newContainer, child) )


		} else if(descriptionObject.type === 'geometry'){


			let newGeometry = new Geometry();

			if(descriptionObject.name) newGeometry.name = descriptionObject.name;
			if(descriptionObject.position) newGeometry.name = descriptionObject.position;
			if(descriptionObject.fillStyle) newGeometry.fillStyle = descriptionObject.fillStyle;
			if(descriptionObject.alpha) newGeometry.alpha = descriptionObject.alpha;
			if(descriptionObject.path && descriptionObject.path.length){


			}


		}
	}

	createTree( tree ){
		let scene = new Container();
		if(tree.name) scene.name = tree.name;
		if(tree.position) scene.name = tree.position;

		tree.children.forEach( child => SceneBuilder.createElement(scene, child));

		return scene;
	}
}



export default new SceneBuilder();
