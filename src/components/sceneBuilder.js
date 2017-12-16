import Geometry from './shapes/Geometry';
import Container from './shapes/Container';

class SceneBuilder {
	static createElement( parentObj, protoObj ){

		if(protoObj.type === 'container'){

			let newContainer = new Container();

			for(let key in protoObj)
				if(key !== 'type' && key !== 'children')
					newContainer[key] = protoObj[key];

			parentObj.addChild( newContainer );

			if(protoObj.children)
				protoObj.children.forEach( child => SceneBuilder.createElement(newContainer, child) )


		} else if(protoObj.type === 'geometry'){

			let newGeometry = new Geometry();

			for(let key in protoObj)
				if(key !== 'type' && key !== 'children' && key !== 'path')
					newGeometry[key] = protoObj[key];


			if(protoObj.path && protoObj.path.length)
				for(let i=0; i<protoObj.path.length; i+=2)
					newGeometry[ protoObj.path[i] ].apply( null, protoObj.path[i+1] );


			parentObj.addChild( newGeometry );
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
